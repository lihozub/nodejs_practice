const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const path = require('path');
const port = 8080;

// массив для хранения текущих подключений
var connections = [];

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/client.js', function (request, response) {
  response.sendFile(path.join(__dirname, 'client.js'));
});

io.on('connection', function (socket) {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);
  
  socket.on('disconnect', function () {
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });
  
  socket.on('send message', function (data) {
    // сгенерировать событие chat message и отправить его всем доступным подключениям
    io.sockets.emit('chat message', data);
  });
});

server.listen(port, function () {
  console.log(`App running on http://localhost:${port}`);
});

