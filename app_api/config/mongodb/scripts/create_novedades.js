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
  const collection = db.collection('novedades')
  collection.insertMany([ // SI SE CAMBIA ALGO AQUI DEBE SER ACTUALIZADO EL CREATE_COUNTERS.JS
    {
      'id': 1,
      'puesto_trabajo_id': 1,
      'descripcion': 'github',
      'prioridad': 'urgente',
      'foto_url': 'https://i.imgur.com/YrQ2Aqz.jpg'
    },
    {
      'id': 2,
      'puesto_trabajo_id': 1,
      'descripcion': 'nuevo proyecto',
      'prioridad': 'urgente',
      'foto_url': 'https://i.imgur.com/E4S80tP.jpg'
    },
    {
      'id': 3,
      'puesto_trabajo_id': 1,
      'descripcion': 'el ojo seco',
      'prioridad': 'urgente',
      'foto_url': 'https://i.imgur.com/U0ueJED.jpg'
    },
    {
      'id': 4,
      'puesto_trabajo_id': 1,
      'descripcion': 'el ojo seco',
      'prioridad': 'urgente',
      'foto_url': 'https://i.imgur.com/LIeiUjD.jpg'
    },
    {
      'id': 5,
      'puesto_trabajo_id': 1,
      'descripcion': 'el ojo seco',
      'prioridad': 'urgente',
      'foto_url': 'https://i.imgur.com/OHruhgi.jpg'
    }
  ], function (err, result) {
    console.log('Inserted 3 documents into the collection')
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
    callback(result)
  })
}
