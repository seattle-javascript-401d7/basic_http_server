
const http = require('http');
const path = require('path');

var port = 3000;

const server = http.createServer((req, res) => {
  var parseUrl = req.url.split('/');

  if (req.method === 'GET' && req.url === '/time') {
    var time = new Date();
    time = time.toTimeString();
    res.writeHead(200, { 'Content-Type': 'text/plain' } );
    res.write(time);
    return res.end();
  }

  if (req.method === 'GET' && parseUrl[1] === 'greet') {
    var name = path.basename(req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello ' + name);
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/greet') {
    req.on('data', (data) => {
      var parsed = JSON.parse(data);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('Hello ' + parsed.name);
      return res.end();
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 error');
  return res.end();
});

server.listen(port, () => console.log('server is listening...'));

