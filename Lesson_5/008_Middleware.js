const express = require('express');
const app = express();
const port = 8080;

let cookieParser = {
  getCookie(request, response, next) {
    const cookies = request.get('Cookie');
    let cookieCollection = cookies ? cookies.split(';') : [];
    let tempCookies = {};

    for (let i = 0; i < cookieCollection.length; i++) {
      let elem = cookieCollection[i];
      let pos = elem.indexOf('=');
      let key, value;

      if (pos !== -1) {
        key = (elem.substring(0, pos)).trim();
        value = (elem.substring(pos + 1)).trim();
      }
      
      tempCookies[key] = decodeURIComponent(value);
    }
    request.cookies = tempCookies;
    next();
  }
};

app.use('/', cookieParser.getCookie);

app.get('/', function (request, response) {
  console.log(request.cookies);
  response.end();
});

app.get('/index', function (request, response) {
  console.log('Main handler');
  response.cookie('SomeCookie', 'this is some cookie');
  response.cookie('AnotherCookie', 'this is another cookie');
  console.log(request.cookies);
  response.end();
});

app.listen(port, function () {
  console.log(`Server was started on http://localhost:${port}`);
});