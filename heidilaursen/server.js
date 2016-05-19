const http = require('http');

var port = 3000;

const server = exports.module = exports = http.createServer((req, res) => {

  if (req.method === 'GET' && req.url === '/time') {
    var time = new Date();
    time = time.toTimeString();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(time);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/greet/name') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello ' + req.url.split('/')[2] + '\n');
    res.end();
  }

  if ((req.method === 'POST' || req.method === 'PUT') && req.url === '/greet/name') {
    req.on('data', (data) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write('Hello ' + JSON.parse(data).name);
      return res.end();
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 error');
  return res.end();
});

server.listen(port, () => process.stdout.write('server is listening ... on ' + port));
