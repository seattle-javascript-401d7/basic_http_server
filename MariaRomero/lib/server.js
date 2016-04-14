const http = require('http');

const server = module.exports = exports = http.createServer( (req, res) => {

  if (req.method === 'GET' && req.url === '/myServer') {
    res.writeHead(200, { 'Content-Type': 'text/html' } );
    res.write('<h2>Welcome to myServer!</h2>');
    return res.end();
  }
  if (req.method === 'GET' && req.url === '/myServer/time') {
    res.writeHead(200, { 'Content-Type': 'text/html' } );
    res.write('<h3>The server time is: ' + Date() + '</h3>');
    return res.end();
  }
  if (req.method === 'GET' && (new RegExp(/\/myServer\/greet\/[a-zA-Z]+/)).test(req.url)) {
    var name = req.url.slice(16);
    res.writeHead(200, { 'Content-Type': 'text/html' } );
    res.write('<h2>Hello ' + name + '!</h2>');
    return res.end();
  }
  if (req.method === 'POST' && req.url === '/myServer/greet') {
    req.on('data', (data) => {
      var parsedName = JSON.parse(data);
      res.writeHead(200, { 'Content-Type': 'text/html' } );
      res.write('<h2>Hello ' + parsedName.name + '!</h2>');
      return res.end();
    });
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' } );
  res.write('404 Error, not found');
  return res.end();
});

server.listen(3000, () => {
  process.stdout.write('server up on port 3000');
});
