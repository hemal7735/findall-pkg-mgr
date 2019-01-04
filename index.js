const spawnSync = require('child_process').spawnSync;

const supportedPackageManagers = ['npm', 'yarn'];

function findAll() {
  return supportedPackageManagers.filter(isAvailable);
}

function isAvailable(packageManager) {
  return !spawnSync(packageManager, ['-v']).error;
}

module.exports = {
  findAll,
  isAvailable
}
