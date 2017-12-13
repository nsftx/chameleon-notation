// require test files
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require src files for coverage.
const srcContext = require.context('../../src/linters', true);
console.log(srcContext);
srcContext.keys().forEach(srcContext);
