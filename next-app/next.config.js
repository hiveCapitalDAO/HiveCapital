/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/' },
    }
  },
  images: {
    // For deployment
    // loader: 'imgix',
    // path: 'https://ipfs.io/ipfs/',
    domains: ['ipfs.io'],
  },
}

module.exports = nextConfig
