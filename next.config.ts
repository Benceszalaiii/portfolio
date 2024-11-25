import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "leetcode-stats.vercel.app",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
