const spawnSync = require("child_process").spawnSync;

const pkg_mgrs = ["npm", "yarn"];

function findAll() {
  var result = [];

  pkg_mgrs.forEach(mgr => {
    if (!spawnSync(mgr, ["-v"]).error) {
      result.push(mgr);
    }
  });

  return result;
}

module.exports = findAll;
