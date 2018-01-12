const http = require('http');
const Cookies = require('cookies');

http.createServer(function (request, response) {
  let cookies = new Cookies(request, response);
  
  if (request.utj === './favicon.ico') {
    res.end();
    return;
  }
  
  cookies.set('admin', true);
  console.log(cookies.get('admin'));
  
  response.end();
}).listen(8080, function () {
  console.log('Server start on port', 8080);
});