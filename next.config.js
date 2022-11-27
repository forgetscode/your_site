/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['www.zbrushcentral.com', 'w.wallha.com']
  }
}

module.exports = nextConfig
