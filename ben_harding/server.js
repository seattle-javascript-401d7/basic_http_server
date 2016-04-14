const http = require('http');

const slothbearHttp = http.createServer((req, res) => {
  if (req.url === '/time') {
    var ct = new Date();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(ct.toString() + '\n');
    return res.end();
  }

  if (req.method === 'GET' && req.url.startsWith('/greet/')) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('hello ' + req.url.split('/')[2] + '\n');
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/greet') {
    req.on('data', (data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('hello ' + JSON.parse(data).name);
      return res.end();
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404: slothbear not found');
  return res.end();
});

slothbearHttp.listen(3000, () => console.log('server up on 3000'));
