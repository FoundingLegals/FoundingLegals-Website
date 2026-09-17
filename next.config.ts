import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  outputFileTracingExcludes: {
    "*": ["./public/**/*"],
  },
  experimental: {
    cpus: 2,
  },
};

export default nextConfig;
