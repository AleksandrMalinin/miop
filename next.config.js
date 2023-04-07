const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  assetPrefix: isProd ? "https://www.miop-sound.com/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
