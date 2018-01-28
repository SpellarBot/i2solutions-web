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
  const collection = db.collection('equipos')
  collection.insertMany([
    {
      _id: 1,
      id: 1,
      nombre: 'Extintor',
      cantidad: 5
    },
    {
      _id: 2,
      id: 2,
      nombre: 'Guantes',
      cantidad: 2
    },
    {
      _id: 3,
      id: 3,
      nombre: 'Gafas',
      cantidad: 1
    }
  ], function (err, result) {
    console.log('Insertado puestos')
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
    callback(result)
  })
}
