import './App.css'
import { useState } from "react";
import ShopifyConnect from "./components/shopify-connect";
import ThemeSelector from "./components/theme-selector";
import ThemeEditor from "./components/theme-editor";



const themes = [
  { id: 1, name: "Modern Store", fileName: "theme-modern.json", preview: "/images/theme1.png" },
  { id: 2, name: "Minimalist", fileName: "theme-minimal.json", preview: "/images/theme2.png" },
];

export default function App() {
  const [connected, setConnected] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* {!connected && <ShopifyConnect onConnect={() => setConnected(true)} />}
      {connected && !selectedTheme && (
        <ThemeSelector themes={themes} onSelect={setSelectedTheme} />
      )}
      {selectedTheme && <ThemeEditor theme={selectedTheme} />} */}
      <ThemeEditor theme={selectedTheme} />
    </div>
  );
}

