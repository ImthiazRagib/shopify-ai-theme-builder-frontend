import axios from "axios";

export async function updateThemeJson({ filePath, jsonPath, newValue }) {
  const response = await axios.post("http://localhost:3001/api/v1/shop/themes/update-theme", { filePath, jsonPath, newValue });

  if (response.status !== 200) {
    throw new Error("Failed to update theme JSON");
  }

  console.log("Theme JSON updated successfully:", response);
  

  return response;
}