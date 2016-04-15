const http = require('http');
module.exports = exports;
const server = http.createServer((req, res) => {
  var serverTime = (new Date()).getTime().toString();
  var name = module.exports = 'Flynn';
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write(serverTime);
    return res.end();
  }
  if (req.method === 'GET' && req.url === '/greet/name') {
    if (process.argv[2]) {
      name = process.argv[2];
    }
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('A pleasure to meet you, ' + name);
    return res.end();
  }
  if ((req.method === 'POST' || req.method === 'PUT') && req.url === '/greet') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.write('{"name": "' + name + '"}');
    return res.end();
  }
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  res.write('this is a 404 message');
  return res.end();
});
server.listen(3030, () => {
  process.stdout.write('server up on 3030\n');
});
