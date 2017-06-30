var http = require('http')

http.createServer(function (request, response) {
  // HTTP init line 
  // 200 : OK
  // header lines
  // Content-Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // body
  // "Hello World"
  response.end("Hello World\n");
}).listen(8000);

console.log('Server running at http://139.199.84.157:8000');
