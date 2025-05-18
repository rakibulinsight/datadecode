/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/datadecode',
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig