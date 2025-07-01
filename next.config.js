/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Disable TypeScript type stripping to avoid experimental warnings
    typedRoutes: false,
  },
  // Add webpack configuration to handle Three.js and related packages
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    
    return config;
  },
}

module.exports = nextConfig
