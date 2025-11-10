import { useState } from "react";
// import { updateThemeJson } from "../utils/fileSystem";

export default function ThemeEditor({ theme }) {
  const [formData, setFormData] = useState({
    bannerTitle: "Your Store’s Hero Title",
    bannerSubtitle: "A short catchy line about your brand.",
    bannerImage: "/images/sample-banner.jpg",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async () => {
    // await updateThemeJson({
    //   filePath: `/themes/${theme.fileName}`,
    //   jsonPath: "sections.header.settings.banner_title",
    //   newValue: formData.bannerTitle,
    // });
    alert("Theme JSON updated successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full border rounded-2xl bg-white shadow-sm p-6">
      {/* Left Panel: Controls */}
      <div className="md:w-1/2 space-y-4 border-r pr-4">
        <h2 className="text-2xl font-semibold mb-4">
          Customize <span className="text-blue-600">{'Theme One'}</span>
        </h2>

        {/* Banner Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Banner Title</label>
          <input
            type="text"
            value={formData.bannerTitle}
            onChange={(e) => handleChange("bannerTitle", e.target.value)}
            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Banner Subtitle */}
        <div>
          <label className="block text-sm font-medium mb-1">Banner Subtitle</label>
          <input
            type="text"
            value={formData.bannerSubtitle}
            onChange={(e) => handleChange("bannerSubtitle", e.target.value)}
            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Banner Image */}
        <div>
          <label className="block text-sm font-medium mb-1">Banner Image URL</label>
          <input
            type="text"
            value={formData.bannerImage}
            onChange={(e) => handleChange("bannerImage", e.target.value)}
            className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleUpdate}
          className="mt-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
        >
          Apply Changes
        </button>
      </div>

      {/* Right Panel: Live Preview */}
      <div className="md:w-1/2">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Live Preview</h3>
        <div className="border rounded-xl overflow-hidden bg-gray-50 shadow-inner">
          <div className="relative">
            {/* Banner Image */}
            <img
              src={formData.bannerImage}
              alt="Banner Preview"
              className="w-full h-56 object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-white text-2xl md:text-3xl font-bold">
                {formData.bannerTitle}
              </h1>
              <p className="text-gray-200 text-sm md:text-base mt-2">
                {formData.bannerSubtitle}
              </p>
              <button className="mt-4 bg-white text-black px-4 py-1 rounded-md text-sm font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
