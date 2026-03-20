import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Founding-Legals-Website",
  assetPrefix: "/Founding-Legals-Website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
