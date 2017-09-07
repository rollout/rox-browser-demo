const { version, ROX } = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  defines: {
    'process.env.VERSION': JSON.stringify(version),
    'process.env.ROX': JSON.stringify(ROX)
  }
};
