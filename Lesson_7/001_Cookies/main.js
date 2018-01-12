const express = require('express');
const app = express();
const port = 8080;

app.use(function (request, response) {
  console.log(request.headers.cookie);
  response.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
  console.log('Server started');
});