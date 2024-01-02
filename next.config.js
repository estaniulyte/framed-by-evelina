/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [{ hostname: 'drive.google.com' }],
  },
};

module.exports = nextConfig;
