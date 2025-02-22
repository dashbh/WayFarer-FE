const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'http://localhost:3003/';
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'wayfarer_mfe_nav',
          filename: 'remoteEntry.js',
          exposes: {
            './App': './src/App',
            './NavBar': './src/components/navbar',
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
    port: 3003,
  },
};
