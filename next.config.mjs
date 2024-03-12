/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/L9CSxK9/image.png',
      },
    ],
  },
};

export default nextConfig;
