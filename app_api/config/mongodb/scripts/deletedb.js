

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = process.env.MONGO_DB_URL;

// Database Name
const dbName = process.env.MONGO_DB_NAME;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  db.collection("novedades").remove({},function(err,numberRemoved){
    console.log("inside remove call back" + numberRemoved);
  });
  db.collection("puestos").remove({},function(err,numberRemoved){
    console.log("inside remove call back" + numberRemoved);
  });
  db.collection("puestos_detalle").remove({},function(err,numberRemoved){
    console.log("inside remove call back" + numberRemoved);
  });
  db.collection("counters").remove({},function(err,numberRemoved){
    console.log("inside remove call back" + numberRemoved);
  });
  client.close();
});
