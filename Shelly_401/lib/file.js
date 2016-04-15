// const net = require('net');

const fs = require('fs');
const jsonStore = fs.createWriteStream(__dirname + '/greet.json');

exports.log = function() {
  process.stdin.pipe(jsonStore);
};
