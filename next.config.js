/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: "/:slug",
        destination: "/social/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
