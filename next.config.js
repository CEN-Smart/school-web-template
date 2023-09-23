/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'viwaschools.com.ng',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
