const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

const port = 8080;

// Registered users who can authorize
let users = [
  { username: 'admin', password: '12345' },
  { username: 'foo', password: 'bar' },
  { username: 'user', password: 'test' }
];

// Create session store
const sessionHandler = require('./js/session_handler');
const store = sessionHandler.createStore();

// Register middleware foe cookies
app.use(cookieParser());

// Session creation
app.use(session({
  store,
  resave: false,
  saveUninitialized: true,
  secret: 'supersecret'
}));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', function (request, response) {

});