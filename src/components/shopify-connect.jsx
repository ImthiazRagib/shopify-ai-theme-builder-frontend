import { useState } from "react";
import axios from "axios";

export default function ShopifyConnect({
    onConnect,
}) {
  const [shopDomain, setShopDomain] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [connected, setConnected] = useState(false);

  const connectShopify = async () => {
    // try {
    //   const res = await axios.post("/api/connect-shopify", {
    //     shop: shopDomain,
    //     token: accessToken,
    //   });
    //   if (res.status === 200) setConnected(true);
    // } catch (err) {
    //   console.error("Connection failed:", err);
    // }

    onConnect()
  };

  return (
    <div className="p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Connect Your Shopify Store</h2>
      <input
        type="text"
        placeholder="Shop Domain (e.g. mystore.myshopify.com)"
        value={shopDomain}
        onChange={(e) => setShopDomain(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <input
        type="password"
        placeholder="Access Token"
        value={accessToken}
        onChange={(e) => setAccessToken(e.target.value)}
        className="border p-2 rounded w-full mb-3"
      />
      <button
        onClick={connectShopify}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Connect
      </button>
      {connected && <p className="mt-3 text-green-600">✅ Connected!</p>}
    </div>
  );
}
