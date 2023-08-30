/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'hackmd.io',
          },
        ],
      },
}

module.exports = nextConfig
