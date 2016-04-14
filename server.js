//pull module for http and fs
const http = require('http');
const fs = require('fs');

//export this module for main page
exports.server = http.creatServer((req, res) => {
  //url slice
  var name = req.url.slice(7)

  if(req.method === 'GET' && (req.url === '/' || req.url === '/index.html' || req.url === '/index')) {
    console.log('Requested index page');
    res.writeHead(200, {'Content-Type': 'text/html'});
    var index = fs.createReadStream(__dirname + '/../index.html');
    return index.pipe(res);
  } else if (req.method === 'GET' && req.url === '/time') {
    console.log('Requested time: ' + new Date());
    res.write('The current date and time of the server is: ' + new Date());
    res.end();
    var fullData = '';


    req.on('end', (data) => {
      var jsonFormat = JSON.parse(fullData);
      var jsonText = 'Hello, ' + jsonFormat.name + '.';
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(jsonText);
      return res.end();
    });
    }
});
