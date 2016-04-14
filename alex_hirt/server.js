const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  var hello = '<h1>Hello There</h1>';
  response.write(hello);
});

server.listen(port, () => {
  process.stdout.write('Server listening on: localhost:' + port + '\n');
});
