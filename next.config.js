/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/out",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
