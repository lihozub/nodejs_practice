const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;
const path = 'logger.txt';

app.use(function (request, response) {
  let data = `Address: ${request.ip}; Time: ${new Date().toLocaleString()}; URL: ${request.url}\n`;
  
  fs.appendFile(path, data, function (err) {
    if (err) console.log(err);
    console.log('data wrote');
  });
});

app.get('/', function (request, response) {
  console.log('Main handler');
  response.end();
});

app.listen(port, function () {
  console.log(`Server was started on http://localhost:${port}`);
});