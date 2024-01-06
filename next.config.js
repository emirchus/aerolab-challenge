/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ["coding-challenge-api.aerolab.co"],
  },
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `${process.env.AEROLAB_API}/:path*`,
    },
  ],
};

module.exports = nextConfig;
