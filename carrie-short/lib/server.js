const http = require('http');

const server = http.createServer((req, res) => {

});

server.listen(3000, () => {
  process.stdout.write('server up on 3000\n');
});
