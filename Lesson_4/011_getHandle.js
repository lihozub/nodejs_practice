const http = require('http');

let data = [
  {name: 'Book', price: 10},
  {name: 'Pen', price: 20},
  {name: 'Lamp', price: 30},
  {name: 'Pencil', price: 40},
  {name: 'Desk', price: 50},
];

http.createServer(function (req, res) {
  console.log('request');
  res.end(`GET request path ${req.url}`);
}).listen(8080, function () {
  console.log('Server running on port 8080');
});