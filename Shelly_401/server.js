const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'application/json'});

if(req.method === 'GET' && req.url === '/time'){
  console.log('time');
  res.write(JSON.stringify({ msg:new Date()}));
  return res.end();
}

if(req.method === 'GET' && req.url === '/greeting/name'){
  console.log('things here');
  const greeters = require(__dirname + '/greeters.json');
  console.log("this is " + JSON.stringify(greeters));
  var name = greeters.hello;
  res.write("Hello, " + name);
  return res.end();
}

if(req.method === 'POST' && req.url === '/greeting'){
req.on('data', (data) => {
const store = fs.createWriteStream(__dirname + '/greeters.json');
store.write(data);
  res.writeHead(200, {'Content-Type':'text/plain'});
  var parsed = JSON.parse(data);
  console.log(parsed.hello);
res.write(parsed.hello);
res.write('x');
return res.end();
});
return;
}

res.writeHead(404, {'Content-Type':'text/plain' });
res.write('404 message');
return res.end('');
});

server.listen(3000, () => process.stdout.write('server up on 3000'));
