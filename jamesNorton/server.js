const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var time = new Date();
    res.write(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + '\n');
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/greet/maverick') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('hello maverick');
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/greet') {
    req.on('data', data => {
      var parsed = JSON.parse(data);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('hello ' + parsed.name);
      return res.end();
    });
    return;
  }
});

server.listen(3000, () => {
  console.log('Listening on Port: 3000\n');
});
