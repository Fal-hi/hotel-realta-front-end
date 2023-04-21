/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  images: {
    domains: ['localhost',"images.unsplash.com"],
  },
}

module.exports = nextConfig