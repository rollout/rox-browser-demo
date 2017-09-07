const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {
  module: webpackModuleConfig,
  defines
} = require('./webpack.config.base');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = exports = {
  devtool: 'eval',
  module: webpackModuleConfig,
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  plugins: [
    new webpack.DefinePlugin(defines),
    new ExtractTextPlugin('styles.css'),
    new HTMLWebpackPlugin({
      title: 'ROX Demo',
      template: path.join(__dirname, 'index.ejs'),
      favicon: path.join(__dirname, 'favicon.ico')
    })
  ]
};
