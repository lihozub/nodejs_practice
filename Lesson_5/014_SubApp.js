const express = require('express');
const port = 8080;

const app = express();
const admin = express();
const user = express();

app.get('/', function (request, response) {
  response.writeHead(200, {'Content-type': 'text/html'});
  response.end(`
    <a href="/admin">admin page</a>
    <br>
    <a href="/user">user page</a>
  `);
});

admin.get('/', function (request, response) {
  console.log(admin.mountpath);
  response.send('Admin Homepage');
});

admin.on('mount', function () {
  console.log('admin mounted');
});

user.get('/', function (request, response) {
  console.log(user.mountpath);
  response.send('User Homepage');
});

user.on('mount', function () {
  console.log('user mounted');
});

app.use('/admin', admin);
app.use('/user', user);

app.listen(port, function () {
  console.log(`Server was started on http://localhost:${port}`);
});