const fs = require('fs');
const http = require('http');

const server = module.exports = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/greet/name') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hello ' + process.argv[2]);
    return res.end();
  }
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write(Date().toString());
    return res.end();
  }
  // if (req.method === 'POST' && req.url === '/greet') {
  //   req.on('data', (chunk) => {
  //     var parsedChunk = JSON.parse(chunk);
  //     res.writeHead(200, {
  //       'Content=Type': 'application/json'
  //     })
  //     res.write(JSON.stringify({name: parsedChunk}));
  //     return res.end();
  //   });
  //   return;
  // }
  res.writeHead(418, {
    'Content-Type': 'text/plain'
  });
  res.write('418: I\'m a little teapot!');
  res.end();
});

server.listen(3000, () => process.stdout.write('server live'));
