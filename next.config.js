const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    (config.experiments = { layers: true, topLevelAwait: true }),
      config.plugins.push(
        new NextFederationPlugin({
          name: "blog",
          remotes: {
            main: `main@https://micro-fe1.netlify.app/_next/static/${
              isServer ? "ssr" : "chunks"
            }/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./fetchPosts": "./components/FetchPosts.jsx",
          },
          extraOptions: {
            exposePages: true,
          },
        })
      );
    return config;
  },
};

module.exports = nextConfig;
