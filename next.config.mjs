/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./sirvLoader.js", // Change this to the correct path to your sirvLoader.js file
  },
};

export default nextConfig;
