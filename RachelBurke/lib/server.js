const http = require('http');
const fs = require('fs');
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
    res.writeHead('Hey' + name);
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/greet') {
    req.on('data', (data) => {
      const log = fs.createWriteStream(__dirname + '/visitors.json');
      log.write(data);
      res.writeHead(200, { 'Content-Type': 'text/plain' } );
      var parsed = JSON.parse(data);
      console.log(parsed.hey);
    res.write(parsed.name);
    return res.end();
  });
  return;
}

res.writeHead(404, { 'Content-Type': 'text/plain' });
res.write('404 : Carry on.');
return res.end('');
});

server.listen(3000, () => {
  process.stdout.write('server happy at 3000');
});
