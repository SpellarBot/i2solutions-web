'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'novedades'
  let plural = 'novedades'
  let tableName = 'novedades'
  let define = sequelize.define(singular, {
    // PK
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },

    // PROPERTIES
    descripcion: { type: DataTypes.STRING },
    descripcionAtendida: { type: DataTypes.STRING }, // MIGRACION
    // nombre: { type: DataTypes.STRING },
    prioridad: { type: DataTypes.ENUM('alta', 'media', 'baja') },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    fotoUrl: { type: DataTypes.STRING, defaultValue: '' },
    fueAtendida: { type: DataTypes.STRING, defaultValue: false },

    // FK
    puestosId: { type: DataTypes.INTEGER.UNSIGNED },
    inspeccionesId: { type: DataTypes.INTEGER.UNSIGNED }
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
    define.belongsTo(models.puestos, { foreignKey: 'puestosId', targetKey: 'id' })
    define.belongsTo(models.inspecciones, { foreignKey: 'inspeccionesId', targetKey: 'id' })
  }

  define.Crear = function ({ descripcion, prioridad, fotoUrl, puestosId, fueAtendida, inspeccionesId, descripcionAtendida }) {
    return new Promise((resolve, reject) => {
      return this.create({
        descripcion,
        prioridad,
        fotoUrl,
        puestosId,
        fueAtendida,
        inspeccionesId,
        descripcionAtendida
      })
        .then((resp) => {
          return resolve(resp.get({ plain: true }))
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorPuesto = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          puestosId: id
        }
      })
        .then((novedades) => {
          return resolve(novedades)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.Atender = function ({ id, atendida, descripcionAtendida }) {
    return new Promise((resolve, reject) => {
      return this.update(
        { fueAtendida: atendida, descripcionAtendida },
        { where: { id: id } })
        .then((resp) => {
          if (resp[0] > 0) {
            return resolve(true)
          } else {
            return resolve(false)
          }
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.BorrarPorPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.destroy({
        where: {
          puestosId: id
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
