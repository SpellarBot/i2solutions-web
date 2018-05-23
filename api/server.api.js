const movil = require('./movil/movil.routes')
module.exports = (app) => {
  app.use('/movil', movil)
}
