const http = require('http');
const router = require(__dirname + '/routes/vanilla-routes');
const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  router.routes(request, response);
});

server.listen(port, () => {
  process.stdout.write('Server listening on: localhost:' + port + '\n');
});

exports.server = server;
