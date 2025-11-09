import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Speed up builds by reducing optimization for server-side code
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Externalize the Google Cloud SDK to avoid bundling it
      config.externals = config.externals || [];
      config.externals.push('@google-cloud/compute');
    }
    return config;
  },
  // Output standalone for better performance
  output: 'standalone',
};

export default nextConfig;
