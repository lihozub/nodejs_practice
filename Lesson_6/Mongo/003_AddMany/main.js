const MongoClient = require('mongodb').MongoClient;
const persons = require('./persons');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (error, client) {
  let collection = client.db('userCollectionDB').collection('users');
  
  collection.insertMany(persons, function (error, result) {
    if (error) throw error;
  
    console.log('Data added!');
    console.log('********* Result ***********');
    console.log(result);
    console.log('****************************');
    client.close();
  });
});