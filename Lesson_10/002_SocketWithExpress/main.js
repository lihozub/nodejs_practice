const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const path = require('path');
const port = 8080;

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {
  // метод send автоматически генерирует событие message
  socket.send('Hello world');
  
  socket.on('greeting', function (data) {
    console.log(data);
  });
});

server.listen(port, function () {
  console.log(`App running on http://localhost:${port}`);
});

