import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
