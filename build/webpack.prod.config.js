const path = require('path');
const webpack = require('webpack');
const OptimizeJsPlugin = require('optimize-js-plugin');

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'chameleon-notation.js',
    libraryTarget: 'umd',
    library: 'ChameleonNotation'
  },
  resolve: {
    alias: {
      chameleonNotation: path.resolve(__dirname, '../src')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    }),
    new OptimizeJsPlugin({
      sourceMap: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
