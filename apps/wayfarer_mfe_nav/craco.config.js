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
            './NavBar': './src/components/NavBar',
          },
          shared: {
            react: { singleton: true, eager: true },
            'react-dom': { singleton: true, eager: true },
            'react/jsx-dev-runtime': { singleton: true, eager: true },
            "react-router-dom": { singleton: true, requiredVersion: "^6.0.0" },
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
