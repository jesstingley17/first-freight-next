/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static HTML export so the site can be deployed to GitHub Pages
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    // You can turn this back on once you wire up ESLint rules you like
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;


