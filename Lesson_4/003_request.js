const http = require('http');

http.createServer(function (req, res) {
  let requestInfo = `
    HTTPVersion: ${req.httpVersion}
    Method: ${req.method}  
    Status code: ${req.statusCode}
    Message: ${req.statusMessage}
    URL: ${req.url}
    `;
  console.log(requestInfo);
  console.log('');

  for (let key in req.headers) {
    console.log(key, ':', req.headers[key]);
  }

  res.end();
}).listen(8080, 'localhost', function () {
  console.log('Server running on port 8080');
});