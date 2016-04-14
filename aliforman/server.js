const http = require('http');

const server = module.exports = http.createServer(onRequest);

function onRequest(req, res) {
  var urlStr = req.url.substring(1, req.url.length);
  var newUrl = urlStr.indexOf('/');
  if (newUrl > -1 && req.method === 'GET') {
    var entry = urlStr.split('/', [2]);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>A humanoid... Nice to meet you ' + entry[1] + '.</h1>');
    return res.end();
  }
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h3>The current earth date and time is: ' + new Date() + '.</h3>');
    return res.end();
  }
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Greetings earthling.</h1>');
    return res.end();
  }
  if (req.method === 'GET' && req.url === '/greet') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Greetings earthling.</h1>');
    return res.end();
  }
  if (req.method === 'POST' && req.url === '/greet') {
    req.on('data', (data) => {
      var parsed = JSON.parse(data);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(parsed.msg);
      return res.end();
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('Page Not Found.  Try again.');
  return res.end();
}

server.listen(3000, () => process.stdout.write('Server ready on 3000'));
