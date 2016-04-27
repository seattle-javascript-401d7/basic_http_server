//pull module for http and path
const http = require('http');

var port = 3000;

//export this module for main page
const server = exports.module = exports = http.createServer((req, res) => {

  if(req.method === 'GET' && req.url === '/time') {
    var time = new Date ();
    time = time.toTimeString();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(time);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/greet/name') {
    if (process.argv[2]) {
      name = process.argv[2];
    };
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello ' + name);
    res.end();
  }

  if ((req.method === 'POST' || req.method === 'PUT') && req.url === '/greet/name') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('{"name": "' + name + '"}');
    return res.end();
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 error');
  return res.end();
});

server.listen(port, () => process.stdout.write('server is listening ... on ' + port));
