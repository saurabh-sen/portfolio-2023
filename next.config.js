/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.visitorbadge.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
