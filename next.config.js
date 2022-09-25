/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
