const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const resolve = file => require('path').resolve(__dirname, file);

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.json'],
    alias: {
      '@definitions': resolve('../src/definitions'),
      '@linters': resolve('../src/linters'),
      '@keywords': resolve('../src/linters/keywords'),
      '@utils': resolve('../src/utils'),
      '@examples': resolve('../examples'),
    }
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ],
};
