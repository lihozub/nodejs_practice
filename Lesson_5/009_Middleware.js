const express = require('express');
const app = express();
const port = 8080;

app.use('/', function (request, response, next) {
  console.log('Prehandler...');
  next();
});

app.get('/', function (request, response) {
  console.log('Main handler');
  response.end();
});

app.get('/about', function (request, response) {
  console.log('About handler');
  response.end();
});

app.listen(port, function () {
  console.log(`Server was started on http://localhost:${port}`);
});