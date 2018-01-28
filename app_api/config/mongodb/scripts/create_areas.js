const MongoClient = require('mongodb').MongoClient

const url = process.env.MONGO_DB_URL

// Database Name
const dbName = process.env.MONGO_DB_NAME

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
  const collection = db.collection('areas')
  collection.insertMany([
    {
      nombre: 'Administrativa',
      id: 1,
      _id: 1
    },
    {
      nombre: 'Matricería',
      id: 2,
      _id: 2
    },
    {
      nombre: 'Inyección',
      id: 3,
      _id: 3
    }
  ], function (err, result) {
    console.log('Insertado areas')
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
    callback(result)
  })
}
