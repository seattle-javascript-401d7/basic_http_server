var fs = require('fs');
var http = require('http');


const server = module.exports = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/someroute') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('WOW GET');
    return res.end();
  }
  if (req.method === 'POST' && req.url === '/someroute') {
    req.on('data', (chunk) => {
      var parsedChunk = JSON.parse(chunk);
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write(parsedChunk.never);
      return res.end();
    });
    return;
  }
  // if it gets to here then it is a 404
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  res.write('this is a 404 message');
  res.end();
});
server.listen(3000, () => process.stdout.write('server up'));
