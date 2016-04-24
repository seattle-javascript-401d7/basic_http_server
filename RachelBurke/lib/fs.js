const fs = require('fs');
const jsonLog = fs.createWriteStream(__dirname + '/visitors.json');

exports.log = function() {
  process.stdin.pipe(jsonLog);
};
