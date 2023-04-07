/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  assetPrefix: "https://www.miop-sound.com/",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
