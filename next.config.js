/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: process.env.NEXT_PUBLIC_ROOT_DIR,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**locahost",
        port: "3000"
      },
      {
        protocol: 'https',
        hostname: "**github.io"
      }
    ]
  },
}

module.exports = nextConfig
