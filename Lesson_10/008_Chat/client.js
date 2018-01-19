var btn = document.querySelector('button');
var messageInput = document.querySelector('#inp');
var messageContainer = document.querySelector('#messages');
var usersContainer = document.querySelector('#userlist');

var socket = io.connect('http://localhost:8080');
var user = '';

messageContainer.style.height = window.innerHeight - 200 + 'px';

// загрузить имена пользователей
socket.emit('load users');
socket.on('users loaded', function (data) {
  var displayUsers = data.users.map((username) => {
    return `<li>${username}</li>`
  });
  
  usersContainer.innerHTML = displayUsers.join(' ');
});

// загрузить сообщения других пользователей (при загрузке страницы)
socket.emit('load messages');
socket.on('messages loaded', function (data) {
  var displayMessages = data.messages.map((msg) => {
    return (`
        <div>
            <h4>${msg.author}</h4>
            <h5>${msg.text}</h5>
        </div>
    `);
  });
  
  messageContainer.innerHTML = displayMessages.join(' ');
});

// загрузить текущее сообщение
socket.on('chat message', function (message) {
  console.log(message);
  
  var displayMessage = `<div>
            <h4>${message.author}</h4>
            <h5>${message.text}</h5>
        </div>`;
  
  messageContainer.innerHTML += displayMessage;
});

// получить имя юзера
socket.on('new user', function (data) {
  user = data.name;
});

btn.addEventListener('click', function () {
  socket.emit('send message', {text: messageInput.value, author: user});
});