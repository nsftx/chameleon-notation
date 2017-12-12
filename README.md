[![codebeat badge](https://codebeat.co/badges/38d14024-5fae-49ea-85a4-eeaaed1686dc)](https://codebeat.co/projects/github-com-chmjs-chameleon-notation-master)

# chameleon-notation

> Chameleon notation validator based on Ajv json schema validator

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Using

### Import

```javascript
import chameleonNotation from 'chameleon-notation';
```

in Node.js

```javascript
const chameleonNotation = require('chameleon-notation');
```

Perform validation

```javascript
const validation = chameleonNotation.validate(data);
if (!validation.isValid) {
  const errors = validation.errors;
  console.log(validation.message);
}
```

or use some of predefined item validators

```javascript
const pageValidation = chameleonNotation.validatePage(data);
const formValidation = chameleonNotation.validateForm(data);
const fieldValidation = chameleonNotation.validateField(data);
```

## CLI Setup
**Prerequisite - run build step**

``` bash
# make command available (symlink)
npm link

# list all commands and options
clint -h
```
