const express = require('express');
const app = express();

app.get('/', function (req, res) {
  console.log(req.url);
  res.send('<h1>Hello World!</h1>');
});

app.get('/about', function (req, res) {
  console.log(req.url);
  res.send('<h1>About page</h1>');
});

app.listen(8080, function () {
  console.log('Server start on port 8080');
});