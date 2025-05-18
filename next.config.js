/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/datadecode',
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/datadecode',
  distDir: 'out',
}

module.exports = nextConfig