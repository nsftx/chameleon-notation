require('dotenv').config();

const webpack = require('webpack');
const resolve = file => require('path').resolve(__dirname, file);

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: ['babel-polyfill', './dev/index.js'],
  output: {
    filename: '[name].js',
    path: resolve('../dev'),
    publicPath: '/dev/',
  },
  resolve: {
    extensions: ['*', '.js', '.json'],
    alias: {
      chameleonNotation: resolve('../src')
    }
  },
  module: {
    noParse: /es6-promise\.js$/,
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      }
    ],
  },
  performance: {
    hints: false
  },
  devServer: {
    contentBase: resolve('../dev'),
    publicPath: '/dev/',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '8080',
    disableHostCheck: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'development'"
    }),
  ],
};
