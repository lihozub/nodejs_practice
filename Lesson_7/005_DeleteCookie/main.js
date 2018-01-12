const http = require('http');
const Cookies = require('cookies');

http.createServer(function (request, response) {
  let cookies = new Cookies(request, response);
  
  cookies.set('login', 'test@ex.com', {maxAge: -1, path: '/admin'});
  
  response.end();
}).listen(8080, function () {
  console.log('Server start on port', 8080);
});