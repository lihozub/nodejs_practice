const http = require('http');
const fs = require('fs');
const path = require('path');

let data = [
  {name: 'Book', price: 10},
  {name: 'Pen', price: 20},
  {name: 'Lamp', price: 30},
  {name: 'Pencil', price: 40},
  {name: 'Desk', price: 50},
];

http.createServer(function (req, res) {
  req.on('error', function (err) {
    console.log('Error!!!:', err);
  });

  if (req.url === '/') {
    let file_path = path.join(__dirname, '010_index.html');
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
  } else if (req.url === '/data') {
    let body = '';
    req.on('data', function () {
      body = data.toString();
      res.writeHead(200, {'Content-type': 'application/json'});
      res.write(JSON.stringify(data));
      res.end();
      console.log('data sent!');
    });

  } else {
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.end('Resource not found!');
  }
}).listen(8080, function () {
  console.log('Server running on port 8080');
});