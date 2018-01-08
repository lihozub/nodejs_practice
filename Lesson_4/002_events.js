const http = require('http');
const server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.write('Hello World!');
  response.end();
}).listen(8080, function () {
  console.log('Server running on port 8080');
});