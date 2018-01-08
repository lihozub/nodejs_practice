const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

http.createServer(function (req, res) {
  req.on('error', function (err) {
    console.log('Error!!!:', err);
  });

  if (req.url === '/') {
    let file_path = path.join(__dirname, '009_index.html');
    fs.readFile(file_path, function (err, data) {
      if (err) {
        console.log(err);
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.write('Not Found!');
      } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data.toString());
      }
      res.end();
    });
  } else if (req.url === '/request') {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h2>Data from server!</h2>');
    console.log('data sent!');
  } else {
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.end('Resource not found!');
  }
}).listen(8080, function () {
  console.log('Server running on port 8080');
});