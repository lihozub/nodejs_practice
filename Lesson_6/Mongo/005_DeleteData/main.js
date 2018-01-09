const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (error, client) {
  if (error) throw error;
  
  let collection = client.db('userCollectionDB').collection('users');
  
  collection.find().toArray(function (error, res) {
    console.log(res);
  });
  
  collection.deleteOne({name: "Max", age: 25}, function (error, result) {
    console.log(result);
    
    collection.find().toArray(function (error, result) {
      console.log(result);
      client.close();
    });
  });
});