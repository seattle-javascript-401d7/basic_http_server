const http = require('http');

const server = module.exports = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    var date = new Date();
    debugger;
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write('' + date);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hello World');
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/') {
    req.on('data', (data) => {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write('Hello World');
      return res.end();
    });
    return;
  }


  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  res.write('this is a 404 message, yo');
  return res.end();
});

server.listen(3000, () => process.stdout.write('server up on 3000'));
