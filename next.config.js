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
  experimental: {
    css: true,
    webpack: false, // Disable webpack 5 for now, as it might conflict with some setups
  },
  reactStrictMode: false
} 
