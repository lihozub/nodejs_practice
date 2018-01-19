const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const path = require('path');
const port = 8080;

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

let counter = 0;

io.on('connection', function (socket) {
  console.log('user connected to socket');
  
  // генерация события test
  socket.emit('test', {
    counter: ++counter
  });
  
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

server.listen(port, function () {
  console.log(`App running on http://localhost:${port}`);
});

