const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
  res.locals.prop1 = 'this is a response property!';
  console.log(res.locals.prop1);

  res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
  res.append('Warning', '199 Miscellaneous warning');

  res.set('Cache-Control', 'no-cache');

  res.send(`<h1>Sample Response</h1><h3>${res.locals.prop1}</h3>`);

}).listen(port, function () {
  console.log(`Server start on port ${port}`);
});