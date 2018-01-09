const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const catalog = 'data/012_example';

app.use('/', express.static(path.join(__dirname, catalog)));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, catalog, 'index.html'));
});

app.listen(port, function () {
  console.log(`Server was started on http://localhost:${port}`);
});