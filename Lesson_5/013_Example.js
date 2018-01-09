const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const app = express();
const port = 8080;

app.use(express.static('data/013_example'));

app.use(bodyParser.urlencoded({extended: true}));

app.route('/')
  .all(function (request, response) {
    console.log('request to main page!');
    response.writeHead(301, {'Location': 'index.html'});
    response.end();
  });

app.route('/test')
  .get(function (request, response) {
    let data = url.parse(request.url, true).query;
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end(data.text);
  })
  .post(function (request, response) {
    let data = request.body.text;
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end(data);
  });

app.listen(port, function () {
  console.log(`Server was started on http://localhost:${port}`);
});