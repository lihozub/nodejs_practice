const restify = require('restify');
const fs = require('fs');
const port = 8080;
const apiHandler = require('./handler');
const server = restify.createServer({
  name: 'myApp'
});

server.use(function (request, response, next) {
  console.log(`method: ${request.method}\n\rurl: ${request.url}`);
  next();
});

server.get('/', function (request, response, next) {
  response.redirect('/api', function () {
    console.log('redirect');
  });
});

server.get('/api', apiHandler.getItems);

server.post('/api', apiHandler.addItem);

server.put('/api/:id', apiHandler.updateItem);

server.del('/api/:id', apiHandler.removeItem);

server.on('InternalServer', function (error) {
  error.body = 'oops...error';
  response.send(error);
});


server.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});