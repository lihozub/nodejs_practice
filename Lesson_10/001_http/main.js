const app =require('http').createServer(handler);
const io = require('socket.io')(app);
const fs = require('fs');
const path = require('path');

const port = 8080;

function handler(request, response) {
  fs.readFile(path.join(__dirname, 'index.html'),
    function (error, data) {
      if (error) {
        response.writeHead(500);
        return res.end('Error loading index.html');
      }
      
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', {greeting: 'Hello World!'});
  socket.on('greeting', function (data) {
    console.log(data);
  });
});

app.listen(port, function () {
  console.log(`App running on http://localhost:${port};`);
});