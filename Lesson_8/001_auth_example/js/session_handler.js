const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (error, client) {
  const db = client.db('testDB');
  console.log('Mongo connection established');
  client.close();
});