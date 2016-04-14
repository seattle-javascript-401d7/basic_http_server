'use strict';
const http = require('http');

http.createServer((req, res) => {

  let time = new Date().toString();

  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('The time is ' + time);
    return res.end();
  }
  if (req.method === 'GET' && req.url === '/greet') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello world!');
    return res.end();
  }
  if (req.method === 'GET' && req.url == '/greet/' + req.url.substr(7)) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Greetings ' + req.url.substr(7));
    return res.end();
  }
  if (req.method === 'POST' && req.url === '/greet') {
    req.on('data', (data) => {
      let parsed = JSON.parse(data);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(parsed.name);
      return res.end();
    });
  }

}).listen(3000, () => console.log('server is up!'));
