const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'http://localhost:3000/';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'wayfarer_mfe_shell',
          remotes: {
            '@wayfarer_mfe_home': 'wayfarer_mfe_home@http://localhost:3001/remoteEntry.js',
            '@wayfarer_mfe_search': 'wayfarer_mfe_search@http://localhost:3002/remoteEntry.js',
            '@wayfarer_mfe_nav': 'wayfarer_mfe_nav@http://localhost:3003/remoteEntry.js',
          },
          shared: {
            react: { singleton: true, eager: true },
            'react-dom': { singleton: true, eager: true },
            'react/jsx-dev-runtime': { singleton: true, eager: true },
          },
        })
      );
      return webpackConfig;
    },
  },
};
