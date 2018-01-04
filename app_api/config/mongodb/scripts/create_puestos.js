const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'i2solutions'

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
      nombre: 'Puesto 1',
      id: 1
    },
    {
      area_id: 1,
      nombre: 'Puesto 2',
      id: 2
    },
    {
      area_id: 1,
      nombre: 'Puesto 3',
      id: 3
    },
    {
      area_id: 2,
      nombre: 'Puesto 1',
      id: 4
    },
    {
      area_id: 2,
      nombre: 'Puesto 2',
      id: 5
    },
    {
      area_id: 2,
      nombre: 'Puesto 3',
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
