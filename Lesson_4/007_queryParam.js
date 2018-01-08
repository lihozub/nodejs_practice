const http = require('http');
const url = require('url');

const server = http.createServer();
const port = 8080;

server.on('request', function (req, res) {
  const method = req.method;
  const _url = req.url;
  console.log('Method:', method, '; URL:', _url);

  const parsed = url.parse(req.url, true);
  console.log(parsed);

  if (parsed.pathname === '/test' && parsed.query.message) {
    res.statusCode = 200;
    res.end(parsed.query.message);
  } else {
    res.statusCode = 404;
    res.end('Page not found on server!');
  }
});

server.listen(port, function () {
  console.log(`Server running on port ${port}`);
});