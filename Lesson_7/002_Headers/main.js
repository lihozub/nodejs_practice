const express = require('express');
const app = express();
const port = 8080;

app.use('/', function (request, response) {
  console.log('Cookies from client', request.headers.cookie);
  // response.setHeader('Set-Cookie', 'TestHeader=HeaderValue');
  response.setHeader('Set-Cookie', ['login=lihozub', 'password=123123']);
  // response.writeHead(200, {'Set-Cookie': ['firstname=Jason', 'lastname=Voorhees']});
  
  console.log('Method getCookie():', response.getHeader('Set-Cookie'));
  
  response.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
  console.log(`Server started on http://localhost:${port}`);
});