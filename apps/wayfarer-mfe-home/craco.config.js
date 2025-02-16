const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'http://localhost:3001/';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'wayfarerMfeHome',
          filename: 'remoteEntry.js',
          exposes: {
            './Home': './src/Home',
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
  devServer: {
    port: 3001,
  },
};