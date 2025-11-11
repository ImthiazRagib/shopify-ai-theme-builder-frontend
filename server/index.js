import express from "express";
import * as fs from "fs";
import * as path from "path";
import extract from "extract-zip";
import archiver from "archiver";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // Vite dev server
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
}));

// parse JSON
app.use(express.json());

const BASE_PATH = path.join(process.cwd(), "server/themes");

// ------------------- Utilities -------------------
export const unzipFile = async (zipPath, extractTo) => {
  try {
    await extract(zipPath, { dir: path.resolve(extractTo) });
    console.log(`✅ Extracted ${zipPath} to ${extractTo}`);
  } catch (error) {
    console.error('❌ unzipFile error:', error);
    throw error;
  }
};

export async function zipTheme(themeDir, outputZip) {
  const output = fs.createWriteStream(outputZip);
  const archive = archiver('zip', { zlib: { level: 9 } });

  return new Promise((resolve, reject) => {
    output.on('close', resolve);
    archive.on('error', reject);

    archive.pipe(output);
    archive.directory(themeDir + '/', false);
    archive.finalize();
  });
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

function setNestedValue(obj, keyPath, value) {
  const keys = keyPath.split(".");
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    if (!current[k]) current[k] = {};
    current = current[k];
  }
  current[keys[keys.length - 1]] = value;
}

// ------------------- Main Function -------------------
async function updateThemeLocally({
  themeFilePath,
  jsonFilePath = "config/settings_data.json",
  sectionKey,
  field,
  newValue,
}) {
  const themeName = path.basename(themeFilePath, path.extname(themeFilePath));
  return themeName
  const tempDir = path.join(BASE_PATH, `${themeName}_workdir`);
  const extractPath = tempDir;

  try {
    // 1️⃣ Unzip or copy folder
    if (fs.existsSync(tempDir)) ensureDir(tempDir);
    else if (themeFilePath.endsWith(".zip")) {
      await unzipFile(path.join(BASE_PATH, themeFilePath), extractPath);
    } else if (fs.statSync(path.join(BASE_PATH, themeFilePath)).isDirectory()) {
      fs.cpSync(path.join(BASE_PATH, themeFilePath), extractPath, { recursive: true });
    } else {
      throw new Error("Theme file must be a .zip or directory");
    }

    // 2️⃣ Read JSON
    const jsonFullPath = path.join(extractPath, jsonFilePath);
    if (!fs.existsSync(jsonFullPath)) throw new Error(`JSON file not found: ${jsonFilePath}`);
    const jsonData = readJson(jsonFullPath);

    // 3️⃣ Find section
    const sections = jsonData.current?.sections ?? jsonData.sections;
    let targetSection = sections[sectionKey];
    if (!targetSection) {
      targetSection = Object.entries(sections).find(([k]) =>
        k.toLowerCase().includes(sectionKey.toLowerCase())
      )?.[1];
    }
    if (!targetSection) throw new Error(`Section "${sectionKey}" not found`);

    // 4️⃣ Update field dynamically
    setNestedValue(targetSection, field, newValue);

    // 5️⃣ Save JSON
    writeJson(jsonFullPath, jsonData);

    // 6️⃣ Re-zip updated theme
    const updatedZipPath = path.join(BASE_PATH, `${themeName}_updated.zip`);
    await zipTheme(extractPath, updatedZipPath);

    return { extractPath, themeName, updatedZipPath };
  } catch (err) {
    console.error('❌ Theme update error:', err);
    throw err;
  }
}

// ------------------- Express API -------------------
app.post("/api/update-theme", async (req, res) => {
  const { filePath, jsonFilePath, sectionKey, field, newValue } = req.body;
  return req
  if (!filePath || !sectionKey || !field) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const result = await updateThemeLocally({ themeFilePath: filePath, jsonFilePath, sectionKey, field, newValue });
    res.json({
      success: true,
      message: "Theme updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update theme" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
