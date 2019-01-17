# findall-pkg-mgr [![Build Status](https://travis-ci.org/hemal7735/findall-pkg-mgr.svg?branch=master)](https://travis-ci.org/hemal7735/findall-pkg-mgr) [![codecov](https://codecov.io/gh/hemal7735/findall-pkg-mgr/branch/master/graph/badge.svg)](https://codecov.io/gh/hemal7735/findall-pkg-mgr)

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
