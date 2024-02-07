/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [{ hostname: 'drive.google.com' }],
    remotePatterns: [{ hostname: 'github.com' }],
  },
};

module.exports = nextConfig;
