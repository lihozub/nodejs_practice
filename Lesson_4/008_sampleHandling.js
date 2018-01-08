const http = require('http');

http.createServer(function (req, res) {
  let response_text;

  switch (req.method) {
    case 'GET': {
      response_text = `GET request to path ${req.url}`;
      responseOutput(response_text, res);
      break;
    }
    case 'POST': {
      response_text = `POST request to path ${req.url}`;
      responseOutput(response_text, res);
      break;
    }
  }

}).listen(8080, function () {
  console.log('Server running on port 8080');
});

function responseOutput(response_text, res) {
  console.log(response_text);
  res.end(response_text);
}