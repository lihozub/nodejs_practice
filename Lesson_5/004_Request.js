const express = require('express');
const util = require('util');
const app = express();
const port = 8080;

app.all('*', function (req, res) {
  console.log(`url: ${req.url}`);
  console.log(`method: ${req.method}`);
  console.log(`query: ${util.inspect(req.query)}`);
  console.log(`protocol: ${req.protocol}`);
  console.log(`secure: ${req.secure}`);
  console.log(`accepts: ${req.accepts(['text/html', 'application/json'])}`);
  console.log(`content type header: ${req.get('Content-Type')}`);
  console.log('---------------');
  res.end();
});

app.listen(port, function () {
  console.log(`Server start on port ${port}`);
});