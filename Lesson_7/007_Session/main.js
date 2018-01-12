const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
  // имя сессии
  name: 'session',
  // секретные ключи
  keys: ['key1', 'key2']
}));

app.get('/', function (request, response) {
  console.log(request.ip);
  
  if (request.session.isNew) {
    console.log('Session created!');
  }
  
  request.session.views = (request.session.views || 0) + 1;
  response.end(request.session.views + ' views');
});

app.listen(8080);