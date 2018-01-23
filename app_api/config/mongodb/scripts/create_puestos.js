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
  const collection = db.collection('puestos')
  collection.insertMany([
    {
      area_id: 1,
      nombre: 'Oficinas',
      id: 1
    },
    {
      area_id: 1,
      nombre: 'Tesoreria',
      id: 2
    },
    {
      area_id: 1,
      nombre: 'Laboratorios',
      id: 3
    },
    {
      area_id: 2,
      nombre: 'Tornos',
      id: 4
    },
    {
      area_id: 2,
      nombre: 'Servidores',
      id: 5
    },
    {
      area_id: 2,
      nombre: 'PCs',
      id: 6
    }
  ], function (err, result) {
    console.log('Inserted 3 documents into the collection')
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
    callback(result)
  })
}
