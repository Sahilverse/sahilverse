import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [65, 70, 75, 80, 85],
  },
  allowedDevOrigins: ['192.168.1.71']
};

export default nextConfig;
