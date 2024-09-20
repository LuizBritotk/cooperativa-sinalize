const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_API_URL_LOCALHOST: JSON.stringify(process.env.VUE_APP_API_URL_LOCALHOST),
        },
      }),
    ],
  },

  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL_LOCALHOST || 'http://localhost:3000', // Default to localhost:3000 if not set
        changeOrigin: true,
        secure: false,
      },
    },
    port: 8080,
    open: true,
    onBeforeSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
    },
  },

  pluginOptions: {},
};