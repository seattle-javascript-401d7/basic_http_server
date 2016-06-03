var http = require('http');
var greet = require(__dirname + '/lib/greet');

var server = module.exports = exports = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write((new Date()).toString());
    res.end();
    return;
  }
  if (req.method === 'GET' && req.url.startsWith('/greet')) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      var name = req.url.split('/')[2];
      res.write(greet(name));
      res.end();
      return;
  }
  if (req.method === 'POST' && req.url === '/greet') {
      var body = '';
      req.on('data', (chunk) => {
        body += chunk;
        return;
    });
  }
  if (req.url !== ('/time' || '/greet' )) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('page not found');
    res.end();
    return;
  }
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(greet(JSON.parse(body).name));
    res.end();
  });
});

server.listen(3000, () => {
  console.log('server running on port 3000');
});
