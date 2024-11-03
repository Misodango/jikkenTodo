const { defineConfig } = require('@vue/cli-service')
// vue.config.js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  transpileDependencies: true,
  publicPath: '/jikkenTodo/',
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,  // これでconsole.logが削除されます
            },
          },
        }),
      ],
    },
  },
};
