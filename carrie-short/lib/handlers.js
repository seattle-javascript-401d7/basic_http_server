function time() {
  return '' + new Date();
}

function greet(name) {
  return 'Hello ' + (name || 'no name');
}

exports.greet = greet;
exports.time = time;
