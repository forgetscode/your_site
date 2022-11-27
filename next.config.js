/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['www.zbrushcentral.com']
  }
}

module.exports = nextConfig
