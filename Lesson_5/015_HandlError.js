const express = require('express');
const port = 8080;

const app = express();

app.use(function (request, response, next) {
  if (request.url === '/') {
    response.send('Hello');
  } else {
    next();
  }
});

app.use(function (request, response, next) {
  if (request.url === '/forbidden') {
    next(new Error('access denied!'));
  } else {
    next();
  }
});

app.use(function (request, response, next) {
  if (request.url === '/test') {
    response.send('Test');
  } else {
    next();
  }
});

app.use(function (request, response, next) {
  next(new Error('page not found!'));
});

app.use(function (error, request, response, next) {
  response.status(500).send('Ooops...Something wrong!');
  next(error.message);
});

app.listen(port, function () {
  console.log(`Server was started on http://localhost:${port}`);
});