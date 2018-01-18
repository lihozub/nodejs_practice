const restify = require('restify');
const fs = require('fs');
const port = 8080;

const server = restify.createServer({
  name: 'myApp'
});

server.use(function (request, response, next) {
  console.log(`method: ${request.method}\n\rurl: ${request.url}`);
  next();
});

server.get('/', function (request, response, next) {
  response.send('This is a server created with restify! GET');
});

server.post('/', function (request, response, next) {
  response.send('This is a server created with restify! POST');
});

server.use(function () {
  res.send(404);
});

server.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});