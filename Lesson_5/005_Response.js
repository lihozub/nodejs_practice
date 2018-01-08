const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
  res.cookie('someCookie', 'this is a cookie', {
    httpOnly: true,
    maxAge: 2000 * 60
  });
  res.cookie('anotherCookie', 'this is another cookie');
  res.clearCookie('anotherCookie');

  res.sendFile(path.join(__dirname, '/data/007_index.html'));
});

app.listen(port, function () {
  console.log(`Server start on port ${port}`);
});