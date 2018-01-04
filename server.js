const app = require('./app_api/app')
const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer(app)
app.set('port', port)

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const port = process.env.PORT
  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} correr en otro puerto, este puerto requiere permisos de root`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${bind} el puerto ya esta en uso client`)
      process.exit(1)
    default:
      throw error
  }
}

function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? `Pipe ${addr}`
    : `Port ${addr.port}`
  if (process.env.NODE_ENV !== 'testing') {
    console.info(`server corriendo en  ${bind}`)
  }
}

server.on('error', onError)
server.on('listening', onListening)
server.listen(app.get('port'))
