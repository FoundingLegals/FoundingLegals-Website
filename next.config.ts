import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  outputFileTracingExcludes: {
    "*": [
      "./public/**/*",
      "public/**/*",
      "./public/**",
      "public/**",
      "**/*.mp4",
      "**/*.webm",
      "**/*.mov",
      "node_modules/@swc/core-linux-x64-gnu/**/*",
      "node_modules/@swc/core-linux-x64-musl/**/*",
    ],
  },
};

export default nextConfig;
