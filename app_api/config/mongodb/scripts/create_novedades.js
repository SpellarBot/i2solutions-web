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
  const collection = db.collection('novedades')
  var date = new Date()
  collection.insertMany([ // SI SE CAMBIA ALGO AQUI DEBE SER ACTUALIZADO EL CREATE_COUNTERS.JS
    {
      'id': 1,
      'puesto_trabajo_id': 1,
      'descripcion': 'No esta bien aislado el cable',
      'prioridad': 'urgente',
      'foto_url': 'https://i.imgur.com/YrQ2Aqz.jpg',
      'atendida': false,
      'createdAt': date.toISOString(),
      'updatedAt': date.toISOString()
    },
    {
      'id': 2,
      'puesto_trabajo_id': 1,
      'descripcion': 'El operario no usa guantes',
      'prioridad': 'media',
      'foto_url': 'https://i.imgur.com/E4S80tP.jpg',
      'atendida': false,
      'createdAt': date.toISOString(),
      'updatedAt': date.toISOString()
    },
    {
      'id': 3,
      'puesto_trabajo_id': 1,
      'descripcion': 'Las sillas no estan pintadas',
      'prioridad': 'baja',
      'foto_url': 'https://i.imgur.com/U0ueJED.jpg',
      'atendida': false,
      'createdAt': date.toISOString(),
      'updatedAt': date.toISOString()
    },
    {
      'id': 4,
      'puesto_trabajo_id': 2,
      'descripcion': 'No tiene buses transespol',
      'prioridad': 'urgente',
      'foto_url': 'https://i.imgur.com/LIeiUjD.jpg',
      'atendida': false,
      'createdAt': date.toISOString(),
      'updatedAt': date.toISOString()
    },
    {
      'id': 5,
      'puesto_trabajo_id': 2,
      'descripcion': 'No se tienen muchos comedores',
      'prioridad': 'baja',
      'foto_url': 'https://i.imgur.com/OHruhgi.jpg',
      'atendida': false,
      'createdAt': date.toISOString(),
      'updatedAt': date.toISOString()
    }
  ], function (err, result) {
    console.log('Inserted 3 documents into the collection')
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
    callback(result)
  })
}
