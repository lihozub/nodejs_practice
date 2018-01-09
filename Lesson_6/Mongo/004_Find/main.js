const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (error, client) {
  if (error) throw error;
  
  let collection = client.db('userCollectionDB').collection('users');
  let cursor = collection.find();
  
  cursor.toArray(function (error, result) {
    console.log('*** All Data ***');
    console.log(result);
    console.log('*** All Data END ***');
    
    collection.find({name: 'Max'}).toArray(function (error, result) {
      console.log('*** Employees with name Max ***');
      console.log(result);
      console.log('*** Employees with name Max END ***');
      
      collection.findOne({age: {$gt : 30}}).then(function (result) {
        console.log('*** Employees with age more than 30 ***');
        console.log(result);
        console.log('*** Employees with age more than 30 END ***');
        
        client.close();
      });
    });
  });
});