const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  devtool: '#source-map',
  entry: {
    'chameleon-notation': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    library: 'ChameleonNotation'
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  performance: {
    hints: false
  },
});
