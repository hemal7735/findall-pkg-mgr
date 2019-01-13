# findall-pkg-mgr

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0e13c9072c8f4befba060ded7f63698c)](https://app.codacy.com/app/hemal7735/findall-pkg-mgr?utm_source=github.com&utm_medium=referral&utm_content=hemal7735/findall-pkg-mgr&utm_campaign=Badge_Grade_Dashboard)

It finds all package-managers installed in the system. It finds them without requiring any external dependency.

## Why?

Well, sometimes you might want to install dependencies dynamically based on the package-managers. Some folks prefer [yarn](https://yarnpkg.com/) over [npm](https://www.npmjs.com/).

## Supported Packages

1. npm
2. yarn

## How to

1. installation:
```bash
npm install --save findall-pkg-mgr
```
2. Use as a module
```javascript
const findPkgMngr = require('findall-pkg-mgr');

// Find all available package managers
const pkg_mgrs = findPkgMngr.findAll();
console.log(pkg_mgrs); // [ 'npm', 'yarn' ]

// Check if a specific package manager is available
const isNpmAvailable = findPkgMngr.isAvailable('npm');
console.log(isNpmAvailable); // true

const isYarnAvailable = findPkgMngr.isAvailable('yarn');
console.log(isYarnAvailable); // false
```