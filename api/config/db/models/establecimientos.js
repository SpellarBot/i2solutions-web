'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'establecimientos'
  let plural = 'establecimientos'
  let tableName = 'establecimientos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombres: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    ruc: { type: DataTypes.STRING }
  }, {
    name: {
      singular,
      plural
    },
    tableName,
    timestamps: true,
    updatedAt: 'fechaActualizacion',
    createdAt: 'fechaCreacion',
    freezeTableName: true
  })

  define.associate = function (models) {
    define.belongsTo(models.empresas, { foreignKey: 'empresasId', targetKey: 'id' }, {onDelete: 'CASCADE'})
    define.belongsToMany(models.personas, { through: 'personasEstablecimientos', foreignKey: 'establecimientosId' }, {onDelete: 'CASCADE'})
  }

  define.Crear = function ({ nombres, direccion, ruc, empresasId }) {
    let datos = arguments['0']
    // console.log(datos)
    return new Promise((resolve, reject) => {
      return this.create(datos)
        .then((resp) => {
          return resolve(resp.get({ plain: true }))
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorEmpresas = function ({ empresasId }) {
    return new Promise((resolve, reject) => {
      this.findAll({ where: { empresasId }, raw: true })
        .then((project) => {
          resolve(project)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.Actualizar = function () {
    let datos = JSON.parse(JSON.stringify(arguments['0']))
    let { nombres, direccion, ruc } = datos
    let id = datos['id']
    delete datos['id']
    return new Promise((resolve, reject) => {
      return this.update(
        { nombres, direccion, ruc },
        { where: { id } })
        .then((resp) => {
          return resolve(resp)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.Borrar = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.destroy({
        where: {
          id
        }})
        .then((rowDeleted) => {
          if (rowDeleted > 0) {
            resolve(true)
          } else {
            resolve(false)
          }
        }).catch((err) => {
          return reject(err)
        })
    })
  }
  return define
}
