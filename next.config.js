/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, { isServer }) => {
    // Add the rule for .pem files
    config.module.rules.push({
      test: /\.pem$/,
      use: 'raw-loader',
    });

    // Update the alias for @sentry/node in the client build
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return config;
  },

  // Disable HMR and enable experimental CSS features
  // experimental: {
  //   css: true,
  //   webpack: false, // Disable webpack 5 for now, as it might conflict with some setups
  //   async headers() {
  //     return [
  //       {
  //         // matching all API routes
  //         source: "/api/success*",
  //         headers: [
  //           { key: "Access-Control-Allow-Credentials", value: "true" },
  //           { key: "Access-Control-Allow-Origin", value: "*" },
  //           { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
  //           { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //         ]
  //       }
  //     ]
  //   }
  // },
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: false
} 
