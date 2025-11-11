import { useState } from "react";
import { updateThemeJson } from "../utils/file-system";
import Preview from "./preview";
import TextEditor from "./text-editor";

export default function ThemeEditor({ theme }) {
  const [formData, setFormData] = useState({
    title: "MiTag GPS Tracker for Android",
    subheading:
      "Advanced tracking technology that actually works when you need it most.",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBoKjAooAW9MW9HUZQCqOXMm0T7Hcdxh65zPRGl8K3SWmQOn6bTEmAKIKChxAWuX4DpV-dcF50dO5JxkVpWcglF1Gm2vORLft17Rf6X74qwQeuxmrvEoMPBNINblMNsfHARzQf4O8&usqp=CAc",
    price: "27.86",
    oldPrice: "29.86",
    badge: "2.00",
    currency: "EUR",
    symbol: "€",
    description:
      "<strong>The MiTag GPS Tracker</strong> is a powerful and advanced tracking device with <em>cutting-edge technology</em> for reliable use.",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async () => {
    alert("Theme JSON updated successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full border rounded-2xl bg-white shadow-sm p-6">
      {/* Left: Controls */}
      <div className="md:w-1/2 space-y-4 border-r pr-4">
        <h2 className="text-2xl font-semibold mb-4">
          Customize <span className="text-blue-600">{theme || "Theme One"}</span>
        </h2>

        {["title", "subheading", "image", "price", "oldPrice", "badge", "currency", "symbol"].map(
          (field) => (
            <InputField
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          )
        )}

        {/* Rich Text Editor */}
        <TextEditor
          label="Description"
          value={formData.description}
          onChange={(val) => handleChange("description", val)}
        />

        <button
          onClick={handleUpdate}
          className="mt-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
        >
          Apply Changes
        </button>
      </div>

      {/* Right: Live Preview */}
      <div className="md:w-1/2">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Live Preview</h3>
        <div className="border rounded-xl overflow-hidden bg-gray-50 shadow-inner">
          <div className="relative">
            <div className="min-h-screen bg-gray-50 flex items-start justify-center p-4 sm:p-8">
              <Preview {...formData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small Input Component */
function InputField({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
