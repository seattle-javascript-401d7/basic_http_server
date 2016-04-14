const http = require('http');
const superagent = require('superagent');
const fs = require('fs');

const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'application/json'});

if(req.method === 'GET' && req.url === '/time'){
  console.log('time');
  res.write(JSON.stringify({ msg:new Date()}));
  return res.end();
}

if(req.method === 'POST' && req.url === '/greeting'){
req.on('data', (data) => {
  // var parsed = JSON.parse(data);
  // res.write(parsed);
  res.write('{"hello": "worlds"}');

return res.end();
});
return;
}

res.writeHead(404, {'Content-Type':'text/plain' });

var x = new Date();
res.write('404 message');
return res.end('');

});


server.listen(3000, () => process.stdout.write('server up on 3000'));
