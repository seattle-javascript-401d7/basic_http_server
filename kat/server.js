// const fs = require('fs');
const http = require('http');


const server = module.exports = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.indexOf('/greet/') > -1) {
    var lastSegmentArray = req.url.split('/');
    var name = lastSegmentArray[lastSegmentArray.length - 1];
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hello ' + name);
    return res.end();
  }
  if (req.method === 'GET' && req.url === '/time') {
    console.log(req.url);
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write(Date().toString());
    return res.end();
  }
  if (req.method === 'POST' && req.url === '/greet') {
    console.log(req.url);
    req.on('data', (chunk) => {
      var parsedChunk = JSON.parse(chunk);
      console.log(parsedChunk);
      console.log(parsedChunk.name);
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write(parsedChunk.name);
      return res.end();
    });
    return;
  }
  res.writeHead(418, {
    'Content-Type': 'text/plain'
  });
  res.write('418: I\'m a little teapot!');
  res.end();
});

server.listen(3000, () => process.stdout.write('server live\n'));
