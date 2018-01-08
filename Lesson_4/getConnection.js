const http = require('http');
const port = 8080;

console.log(`Server running on port ${port}`);

let config = {
  host: 'localhost',
  port: port,
  path: '/testConnection'
};

let req = http.request(config, function (response) {
  let body = '';

  response.on('data', function (data) {
    body += data;
  });

  response.on('end', function () {
    console.log(body);
  });
});

req.end();