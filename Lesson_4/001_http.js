const http = require('http');
const server = http.createServer();

server.on('request', function (request, response) {
  console.log('Connection established!');
  console.log(request.method);
  // response.end();
  response.end("Response is configured!", 'utf8', () => console.log('finish'));
});

server.listen(8080);

server.on('listening', function () {
  console.log('Server running on port 8080');
});
