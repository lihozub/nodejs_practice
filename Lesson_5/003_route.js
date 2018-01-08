const express = require('express');
const app = express();
const port = 8080;

app.get('/[a-zA-Z]*\.html$/', function (req, res) {
  res.send(req.url);
  res.end();
});

app.listen(port, function () {
  console.log(`Server start on port ${port}`);
});