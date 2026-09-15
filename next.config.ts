import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/dashboard.html",
        destination: "/dashboard",
      },
      {
        source: "/index.html",
        destination: "/",
      }
    ];
  }
};

export default nextConfig;
