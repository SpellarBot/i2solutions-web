module.exports = ({ responses, db }) => {
  const proto = {
    Crear (empresa) {
      return new Promise((resolve, reject) => {
        db.empresas.Crear(empresa)
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            resolve(responses.NO_OK('Hubo al crear la empresas'))
            return reject(err)
          })
      })
    },
    ObtenerTodos () {
      return new Promise((resolve, reject) => {
        db.empresas.ObtenerTodos()
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            resolve(responses.NO_OK('Hubo un error al encontrar empresas'))
            return reject(err)
          })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
