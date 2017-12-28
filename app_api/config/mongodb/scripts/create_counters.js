
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'i2solutions';

MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  insertDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  const collection = db.collection('counters');
  collection.insertMany([
  {
    _id: 'entityId',
    seq: 5
  }
  ], function(err, result) {
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}