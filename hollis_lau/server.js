const http = require("http");
const url = require("url");

var server = http.createServer((req, res) => {
  var pathArr = url.parse(req.url).pathname.split("/", 3);
  var name;

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Howdy bitches!");
    return res.end();
  }

  if (req.method === "GET" && req.url === "/time") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(new Date().toUTCString());
    return res.end();
  }

  if (req.method === "GET" && req.url === "/greet/" + pathArr[2]) {
    name = pathArr[2];

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello " + name + "!");
    return res.end();
  }

  if (req.method === "POST" && req.url === "/greet") {
    req.on("data", (data) => {
      var parsed = JSON.parse(data);

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Hello " + parsed.name + "!");
      return res.end();
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.write("Not found, bitches!");
  return res.end();
});

server.listen(3000, () => {
  process.stdout.write("Server listening on port 3000\n");
});
