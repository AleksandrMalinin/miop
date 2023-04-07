/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/out",
  images: {
    optimizeImages: false
  }
}

module.exports = nextConfig
