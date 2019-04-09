const path = require('path');

function resolvePath() {
  return path.resolve(process.cwd(), [...arguments].join('/'));
}

module.exports = resolvePath;
