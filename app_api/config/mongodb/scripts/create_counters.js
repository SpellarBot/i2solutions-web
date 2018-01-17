
const MongoClient = require('mongodb').MongoClient

const url = process.env.MONGO_DB_URL;

// Database Name
const dbName = process.env.MONGO_DB_NAME;

MongoClient.connect(url, function (err, client) {
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  insertDocuments(db, function () {
    client.close()
  })
  if (err) {
    throw new Error(`Ha ocurrido un error ${err}`)
  }
})

const insertDocuments = function (db, callback) {
  const collection = db.collection('counters')
  collection.insertMany([
    {
      _id: 'entityId',
      seq: 5
    }
  ], function (err, result) {
    console.log('Inserted 3 documents into the collection')
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
    callback(result)
  })
}
