const http = require('http');
const handler = require (__dirname + '/handlers');

const server = http.createServer((req, res) => {
  var splitUrl = req.url.split('/');
  if (req.method === 'GET' && splitUrl[1] === 'time') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(handler.time());
    return res.end();
  }
  if (req.method === 'GET' && splitUrl[1] === 'greet') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(handler.greet(splitUrl[2]));
    return res.end();
  }
  if (req.method === 'POST' && splitUrl[1] === 'greet') {
    req.on('data', (data) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      var parsed = JSON.parse(data);
      res.write('Hello ' + parsed.name);
      return res.end();
    });
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 - page does not exist');
  return res.end();
});

server.listen(3000, () => {
  process.stdout.write('server up on 3000\n');
});
