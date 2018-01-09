const mongoclient = require('mongodb').MongoClient;
const format = require('util').format;

const url = 'mongodb://localhost:27017/test';

mongoclient.connect(url, function (error, db) {
  if (error) throw error;
  
  console.log('Connection established!');
  
  db.close();
});