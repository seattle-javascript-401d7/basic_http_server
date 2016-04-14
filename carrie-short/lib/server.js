const http = require('http');
const handler = require (__dirname + '/handlers');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(handler.time());
    return res.end();
  }
});

server.listen(3000, () => {
  process.stdout.write('server up on 3000\n');
});
