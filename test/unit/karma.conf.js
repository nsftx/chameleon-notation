// https://github.com/webpack/karma-webpack
var webpackConfig = require('../../build/webpack.test.config');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    port: 9876,
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
      ]
    },
    failOnEmptyTestSuite: false,
  });
};
