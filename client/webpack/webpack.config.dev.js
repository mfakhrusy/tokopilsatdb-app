const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.config.base');

module.exports = merge(webpackBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './build',
    port: 3002,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
});
