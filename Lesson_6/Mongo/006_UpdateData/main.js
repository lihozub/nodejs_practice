const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

let users = [{name: 'Bob', age: 34}, {name: 'Alice', age: 21}, {name: 'Tom', age: 45}];

MongoClient.connect(url, function (error, client) {
  if (error) throw error;
  
  let collection = client.db('userCollectionDB').collection('users');
  
  collection.insertMany(users, function (error, results) {
    collection.findOneAndUpdate(
      {age: 51},
      {$set: {age: 16}},
      {returnOriginal: false},
      function (error, result) {
        console.log(result);
        client.close();
      }
    );
  });
});