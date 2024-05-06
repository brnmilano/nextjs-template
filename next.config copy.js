/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/entrar",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
