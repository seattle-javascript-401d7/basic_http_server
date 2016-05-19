const http = require('http');
const server = http.createServer((req, res) => {

  if (req.method === 'GET' && req.url === '/time') {
    var time = new Date();
    time = time.toTimeString();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(time);
    return res.end();
  }

  if (req.method === 'GET' && req.url.startsWith('/greet/')) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello ' + req.url.split('/')[2] + '\n');
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/greet') {
    req.on('data', (data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('Hello ' + JSON.parse(data).name);
      return res.end();
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 error');
  return res.end();
});

server.listen(3000, () => process.stdout.write('server is listening on 3000'));
