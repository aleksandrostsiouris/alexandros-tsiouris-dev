/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ?
    "/alexandros-tsiouris-dev" :
    undefined,
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: ''
  },
}

module.exports = nextConfig
