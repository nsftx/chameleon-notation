const path = require('path');
const fs = require('fs');

const getFile = (filename) => {
  const file = path.resolve(process.cwd(), filename);
  let json = null;

  try {
    try {
      json = JSON.parse(fs.readFileSync(file).toString());
    } catch (JSONerr) {
      json = require(file);
    }
  } catch (err) {
    console.error(`error:  ${err}`);
    process.exit(2);
  }
  return json;
};

module.exports = {
  getFile,
};
