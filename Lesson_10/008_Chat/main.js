const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const path = require('path');
const port = 8080;

// массив для хранения текущих подключений
let connections = [];
let users = [];
let messages = [];

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'auth.html'));
});

app.get('/:id', function (request, response) {
  if (request.params.id === 'client.js') {
    response.sendFile(path.join(__dirname, 'client.js'));
  } else if (request.params.id === 'favicon.ico') {
    response.sendStatus(404);
  } else {
    users.push(request.params.id);
    response.sendFile(path.join(__dirname, 'index.html'));
  }
});

io.on('connection', function (socket) {
  connections.push(socket);
  console.log(users);
  console.log('Connected: %s sockets connected', connections.length);
  
  socket.on('disconnect', function () {
    let index = connections.indexOf(socket);
    let deletedItem = connections.splice(index, 1);
    
    users.splice(index, 1);
    
    // обновить список пользователей на клиенте
    io.sockets.emit('users loaded', {users});
  
    console.log('Disconnected: %s sockets connected', connections.length);
  });
  
  socket.on('send message', function (data) {
    messages.push(data);
    io.sockets.emit('chat message', data);
  });
  
  socket.on('load users', function () {
    console.log(users);
    io.sockets.emit('users loaded', {users});
  });
  
  socket.on('load messages', function () {
    socket.emit('messages loaded', {messages});
  });
  
  socket.emit('new user', {name: users[users.length - 1]});
});

server.listen(port, function () {
  console.log(`App running on http://localhost:${port}`);
});

