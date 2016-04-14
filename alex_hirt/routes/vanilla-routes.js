var vanillaRoutes = function(request, response) {
  if (request.url === '/time') {
    var currentTime = new Date();
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<h1>' + currentTime + '</h1>');
    console.log();
    response.end();
  }

  if (request.url.indexOf('/greet') === 0 && request.method === 'GET') {
    var pathname = request.url;
    var extractName = pathname.substr(pathname.lastIndexOf('/'));
    var name = extractName.slice(1);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<h1>Hello ' + name + '</h1>');
    response.end();
  }

  if (request.url === '/greet' && request.method === 'POST') {
    request.on('data', (data) => {
      var name = JSON.parse(data).name;
      console.log(name);
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write('<h1>Hello ' + name + '</h1>');
      response.end();
    });
  }
};

exports.routes = vanillaRoutes;
