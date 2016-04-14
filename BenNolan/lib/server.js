const http = require('http');

const server = module.exports = http.createServer((req, res) => {
  var name = req.url.slice(7);

  if (req.method === 'GET' && req.url === '/time') {
    var date = new Date();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('' + date);
    return res.end();
  }

  if (req.method === 'GET' && req.url.slice(0, 7) === '/greet/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('Greetings ' + name + '!');
      return res.end();
  }

  if (req.method === 'POST' && req.url.slice(0, 7) === '/greet/') {
    req.on('data', (data) => {
      var parsed = JSON.parse(data);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(parsed.greet + name);
      return res.end();
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.write('<h1>Error 404</h1>');
  return res.end();
});

server.listen(3000, () => process.stdout.write('server up on 3000'));
