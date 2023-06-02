const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJSON = require('./package.json');

const { dependencies } = packageJSON;

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const webpackCloneConfig = { ...webpackConfig };

      webpackCloneConfig.output = {
        ...webpackCloneConfig.output,
        publicPath: 'auto',
      };

      webpackCloneConfig.plugins = [
        ...webpackCloneConfig.plugins,
        new ModuleFederationPlugin({
          name: 'host_ui',
          filename: 'remoteEntry.js',
          remotes: {
            mfe1: `mfe1@${process.env.MFE1_URL}/remoteEntry.js`,
            mfe2: `mfe2@${process.env.MFE2_URL}/remoteEntry.js`,
          },
          shared: {
            react: {
              strictVersion: true,
              singleton: true,
              requiredVersion: dependencies['react'],
            },
            'react-dom': {
              strictVersion: true,
              singleton: true,
              requiredVersion: dependencies['react-dom'],
            },
            'react-router-dom': {
              strictVersion: true,
              singleton: true,
              requiredVersion: dependencies['react-router-dom'],
            },
            '@mui/material': {
              strictVersion: true,
              singleton: true,
              requiredVersion: dependencies['@mui/material'],
            },
            '@emotion/react': {
              strictVersion: true,
              singleton: true,
              requiredVersion: dependencies['@emotion/react'],
            },
            '@emotion/styled': {
              strictVersion: true,
              singleton: true,
              requiredVersion: dependencies['@emotion/styled'],
            },
          },
        }),
      ];
      return webpackCloneConfig;
    },
  },
};
