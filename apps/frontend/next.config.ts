import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
