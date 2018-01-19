const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const path = require('path');
const port = 8080;

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {
  
  socket.emit('data', {
    message: 'data from server'
  });
  
  socket.on('response', function (data) {
    console.log(data.message);
  });
});

server.listen(port, function () {
  console.log(`App running on http://localhost:${port}`);
});

