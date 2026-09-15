import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/dashboard.html",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/index.html",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
