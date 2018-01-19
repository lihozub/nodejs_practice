var btn = document.querySelector('button');
var messageInput = document.querySelector('#inp');
var messageContainer = document.querySelector('#messages');

var socket = io.connect('http://localhost:8080');

socket.on('chat message', function (message) {
  console.log(message);
  
  var displayMessage = `<div><h4>Message: </h4><h5>${message.text}</h5></div>`;
  messageContainer.innerHTML += displayMessage;
});

btn.addEventListener('click', function () {
  socket.emit('send message', {text: messageInput.value});
});