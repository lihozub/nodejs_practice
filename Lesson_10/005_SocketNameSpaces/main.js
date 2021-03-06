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

namespace.on('connection', function () {
  console.log('connected to namespace');
  
  namespace.emit('greet', {
    message: 'Hello from namespace!'
  });
});

server.listen(port, function () {
  console.log(`App running on http://localhost:${port}`);
});

