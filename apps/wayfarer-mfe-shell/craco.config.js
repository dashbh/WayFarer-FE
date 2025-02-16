const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'http://localhost:3000/';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'wayfarerMfeShell',
          remotes: {
            '@wayfarer-mfe-home': 'wayfarerMfeHome@http://localhost:3001/remoteEntry.js',
            '@wayfarer-mfe-search': 'wayfarerMfeSearch@http://localhost:3002/remoteEntry.js',
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
