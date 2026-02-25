/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['images.unsplash.com', 'cdn-icons-png.flaticon.com'],
    unoptimized: false,
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
};

module.exports = nextConfig;
