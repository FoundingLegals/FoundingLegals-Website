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
  async redirects() {
    return [
      {
        source: "/services/LegalServices/find-investors",
        destination: "/services/LegalServices/pitch-to-investors",
        permanent: true,
      },
      {
        source: "/services/legal-services/find-investors",
        destination: "/services/LegalServices/pitch-to-investors",
        permanent: true,
      },
      {
        source: "/services/find-investors",
        destination: "/services/LegalServices/pitch-to-investors",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
