const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const query = url.parse(req.url, true).query;
  res.end(`GET params: ${JSON.stringify(query)}`);

}).listen(8080, function () {
  console.log('Server running on port 8080');
});