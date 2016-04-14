function home() {
  return 'this is the home page';
}

function time() {
  return '' + new Date();
}

function greet(name) {
  return 'Hello ' + (name || 'no name');
}

exports.home = home;
exports.greet = greet;
exports.time = time;
