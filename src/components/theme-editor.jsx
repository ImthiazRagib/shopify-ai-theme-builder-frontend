import { useState } from "react";
import { updateThemeJson } from "../utils/file-system";
import Preview from "./preview";

export default function ThemeEditor({ theme }) {
    const [formData, setFormData] = useState({
        title: "MiTag GPS Tracker for Android",
        subheading:
            "Advanced tracking technology that actually works when you need it most.",
        image:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBoKjAooAW9MW9HUZQCqOXMm0T7Hcdxh65zPRGl8K3SWmQOn6bTEmAKIKChxAWuX4DpV-dcF50dO5JxkVpWcglF1Gm2vORLft17Rf6X74qwQeuxmrvEoMPBNINblMNsfHARzQf4O8&usqp=CAc", // replace with your image
        price: "27.86",
        oldPrice: "29.86",
        badge: "2.00",
        currency: "EUR",
        symbol: "€",
        description:
            "<strong>The MiTag GPS Tracker</strong> is a powerful and advanced tracking device that uses <em>cutting-edge technology</em> to keep you connected and safe. With its built-in GPS and advanced algorithms, it provides <strong>real-time location tracking</strong>, even in <em>difficult environments</em>. Whether you're a <strong>tourist</strong>, a <strong>business owner</strong>, or a <strong>regular commuter</strong>, the MiTag GPS Tracker is the perfect solution for you.<br><br><strong>Key Features:</strong><ul><li>Real-time GPS tracking with 5-second updates</li><li>Water-resistant IP67 rating</li><li>Up to 30 days battery life on a single charge</li><li>Geo-fencing alerts via SMS & app</li><li>Compact 45 × 35 × 12 mm design</li></ul><br><table border='1' cellpadding='6' cellspacing='0'><tr><th>Specification</th><th>Details</th></tr><tr><td>Network</td><td>4G LTE-M / 2G fallback</td></tr><tr><td>Battery</td><td>1500 mAh Li-ion rechargeable</td></tr><tr><td>Accuracy</td><td>±5 meters</td></tr><tr><td>Operating Temp</td><td>-20 °C to 60 °C</td></tr><tr><td>Weight</td><td>28 g</td></tr></table>",
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleUpdate = async () => {
        // await updateThemeJson({
        //     "filePath": "/uploads/themes/theme-jewel.zip",
        //     "jsonFilePath": "config/settings_data.json",
        //     "sectionKey": "1578542087674",
        //     "field": "blocks.1578542087674-0.settings.heading",
        //     "newValue": "🔥 New Hero Banner Title"
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

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Subheading */}
                <div>
                    <label className="block text-sm font-medium mb-1">Subheading</label>
                    <input
                        type="text"
                        value={formData.subheading}
                        onChange={(e) => handleChange("subheading", e.target.value)}
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Image */}
                <div>
                    <label className="block text-sm font-medium mb-1">Image URL</label>
                    <input
                        type="text"
                        value={formData.image}
                        onChange={(e) => handleChange("image", e.target.value)}
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium mb-1">Price</label>
                    <input
                        type="text"
                        value={formData.price}
                        onChange={(e) => handleChange("price", e.target.value)}
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Old Price */}
                <div>
                    <label className="block text-sm font-medium mb-1">Old Price</label>
                    <input
                        type="text"
                        value={formData.oldPrice}
                        onChange={(e) => handleChange("oldPrice", e.target.value)}
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Badge */}
                <div>
                    <label className="block text-sm font-medium mb-1">Badge</label>
                    <input
                        type="text"
                        value={formData.badge}
                        onChange={(e) => handleChange("badge", e.target.value)}
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Currency */}
                <div>
                    <label className="block text-sm font-medium mb-1">Currency</label>
                    <input
                        type="text"
                        value={formData.currency}
                        onChange={(e) => handleChange("currency", e.target.value)}
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Symbol */}
                <div>
                    <label className="block text-sm font-medium mb-1">Symbol</label>
                    <input
                        type="text"
                        value={formData.symbol}
                        onChange={(e) => handleChange("symbol", e.target.value)}
                        className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
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
                        <div className="min-h-screen bg-gray-50 flex items-start justify-center p-4 sm:p-8">
                            <Preview
                                symbol={formData.symbol}
                                title={formData.title}
                                subheading={formData.subheading}
                                image={formData.image}
                                price={formData.price}
                                oldPrice={formData.oldPrice}
                                description={formData.description}
                                badge={formData.badge}
                                currency={formData.currency}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
