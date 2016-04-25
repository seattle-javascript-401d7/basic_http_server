const http = require('http');
const server = module.exports = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write(Date().toString());
    return res.end();
  }

  if (req.method === 'GET' && req.url.indexOf('/greet/') > -1) {
    var lastSegmentArray = req.url.split('/');
    var name = lastSegmentArray[lastSegmentArray.length - 1];
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hey ' + name);
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/greet') {
    console.log(req.url);
    req.on('data', (data) => {
      var parsedData = JSON.parse(data);
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write(parsedData.name);
    return res.end();
  });
  return;
}

  res.writeHead(418, { 'Content-Type': 'text/plain' });
  res.write('418: Carry on.');
  res.end();
});

server.listen(3000, () => {
  process.stdout.write('server happy at 3000');
});
