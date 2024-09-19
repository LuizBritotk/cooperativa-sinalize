const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
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
        target: process.env.VUE_APP_API_URL_LOCALHOST,
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' },
      },
    },
    port: 8080,
    open: true,
  },

  pluginOptions: {},
});