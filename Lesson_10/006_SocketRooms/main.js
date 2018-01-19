const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const path = require('path');
const port = 8080;

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// создаём пространство имён при помощи of ('namespace_name')
const namespace = io.of('/namespace');

namespace.on('connection', function (socket) {
  console.log('connected to namespace');
  
  let room = '';
  
  // в каждом пространстве имён может быть выделена отдельная комната(room) - канал связи с произвольным названием
  socket.on('btn_click', function (data) {
    if(data.btn === 1) {
      room = 'demo room 1';
      
      socket.join(room);
      socket.emit('room_join', {roomname: 1});
    } else if(data.btn === 2) {
      room = 'demo room 2';
  
      socket.join(room);
      socket.emit('room_join', {roomname: 2});
    }
  
    socket.on('get_greeting', function () {
      namespace.to('demo room 1').emit('greet', {message: 'Hello from room 1!'});
      namespace.to('demo room 2').emit('greet', {message: 'Hello from room 2!'});
    });
  });
});

server.listen(port, function () {
  console.log(`App running on http://localhost:${port}`);
});

