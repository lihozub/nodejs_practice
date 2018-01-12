const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('Secret string'));

app.get('/', function (request, response) {
  response.cookie('login', 'admin', {maxAge: 10000});
  console.log(request.cookies);
  // console.log(request.cookies.login);
  
  response.clearCookie('login');
  response.end();
});

app.listen(8080);