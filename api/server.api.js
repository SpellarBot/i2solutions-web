const movil = require('./movil/movil.routes')
const web = require('./web/web.routes')
const auth = require('./auth')
module.exports = (app) => {
  app.use('/movil', movil)
  app.use('/web', web)
  app.use('/auth', auth)
}
