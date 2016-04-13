var fs = require('fs');
var http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.write(JSON.stringify({msg: 'hello world'}))
  res.end();
}).listen(3000, () => console.log('server up'));
