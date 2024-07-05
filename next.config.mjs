/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swlsdud1005.sirv.com",
      },
    ],
  },
};

export default nextConfig;
