const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (error, client) {
  const db = client.db('userCollectionDB');
  let collection = db.collection('users');
  let user = {firstName: 'Ivez', lastname: "Ivanof", age: 30};
  
  collection.insertOne(user, function (error, result) {
    if (error) {
      console.error(error);
      return false;
    }
  
    console.log(result.ops);
    client.close();
  });
});