/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // ✅ Unsplash
      "avatar.iran.liara.run" // ✅ Liara avatar
    ],
  },
};

module.exports = nextConfig;