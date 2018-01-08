const http = require('http');

http.createServer(function (req, res) {
  console.log(req.rawHeaders);

  res.setHeader('Content-type', 'text/html');

  let ct = res.getHeader('Content-type');
  console.log(ct);

  res.sendDate = false;
  console.log(res.headersSent);
  res.end('<h1>Test page</h1>');
  console.log(res.headersSent);

}).listen(8080, function () {
  console.log('Server running on port 8080');
});