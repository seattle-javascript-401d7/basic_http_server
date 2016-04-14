const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    var time = new Date();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('the current time is: ' + time);
    return res.end();
  }
  if (req.method === 'GET' && req.url.slice(0, 7) === '/greet/') {
    var name = req.url.slice(7);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello ' + name + '! Glad you are here!');
    return res.end();
  }
  if (req.method === 'POST' && req.url.slice(0, 6) === '/greet') {
    req.on('data', (data) => {
      var parsedD = JSON.parse(data);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('Hello ' + parsedD.name + '! Glad you are here!');
      return res.end();
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'test/html' });
  res.write('Sorry, we can\'t find what you are looking for, please try again.');
  return res.end();
});


server.listen(7000, () => process.stdout.write('server up on 7000\n'));
