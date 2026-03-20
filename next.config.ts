import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Founding-Legals-Website-Main",
  assetPrefix: "/Founding-Legals-Website-Main/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
