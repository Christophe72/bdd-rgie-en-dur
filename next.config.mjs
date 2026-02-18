import withPWAConfig from "next-pwa";

const withPWA = withPWAConfig({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /\/api\/rgie\/search/,
      handler: "NetworkFirst",
      options: {
        cacheName: "rgie-api-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withPWA(nextConfig);
