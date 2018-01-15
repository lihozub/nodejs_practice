const express = require('express');
const expressSession = require('express-session');

const app = express();

let secretValue = 'secret value';

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: secretValue
}));

app.get('/', function (request, response) {
  
  if (!request.session.flag) {
    console.log('Set Session');
    request.session.userName = 'Alex';
    request.session.flag = true;
  }
  
  console.log(request.session.userName);
  response.end();
});

app.listen(8080);