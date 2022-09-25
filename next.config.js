/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  redirects: async () => [
    {
      source: "/resume",
      destination: "/resume_regular.pdf",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
