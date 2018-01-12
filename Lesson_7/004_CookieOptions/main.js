const http = require('http');
const Cookies = require('cookies');

http.createServer(function (request, response) {
  let cookies = new Cookies(request, response, {'keys': ['Secret_string']});
  console.log(cookies.get('login', {signed: true}));
  
  let cookieOptions = {
    maxAge: 12000,
    //expires: Expires date
    path: '/admin',
    secure: false,
    signed: true
  };
  
  cookies.set('login', 'test@ex.com', cookieOptions);
  
  response.end();
}).listen(8080, function () {
  console.log('Server start on port', 8080);
});