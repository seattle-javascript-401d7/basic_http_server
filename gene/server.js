var http = require('http');
var greet = require(__dirname + '/lib/greet');
var name = '';

var server = module.exports = exports = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write((new Date()).toString());
    return res.end();
  }
  if (req.method === 'GET' && req.url.startsWith('/greet')) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      name = req.url.split('/')[2];
      res.write(greet(name));
      return res.end();
  }
  if (req.method === 'POST' && req.url === '/greet') {
      req.on('data', (chunk) => {
        name = JSON.parse(chunk.toString());
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(greet(name.name));
        return res.end();
    });
  }
  if (req.method === 'GET' && req.url !== ('/greet' || '/time')) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('page not found');
    return res.end();
  }
});

server.listen(3000, () => {
  console.log('server running on port 3000');
});
