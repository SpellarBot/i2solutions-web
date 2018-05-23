'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'Accidente'
  let plural = 'Accidentes'
  let tableName = 'accidentes'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    descripcion: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    heridos: { type: DataTypes.STRING },
    atendido_en_empresa: { type: DataTypes.BOOLEAN },
    muertos: { type: DataTypes.INTEGER },
    fecha: { type: DataTypes.DATE }
  },{
  name :{
    singular,
    plural,
    tableName
  },
    timestamps: true,
    updatedAt: 'fechaActualizacion',
    createdAt: 'fechaCreacion',
    freezeTableName: true
  })

  define.associate = function (models) {
    define.belongsTo(models.PuestosTrabajo, { foreignKey: `puestos_trabajo_id`,  targetKey: 'id' })
  }

  define.Crear = function ({ descripcion, nombre, heridos, atendido_en_empresa, muertos ,fecha, puestos_trabajo_id }) {
    let datos = arguments['0']
    return new Promise( (resolve, reject) => {
      return this.create(datos)
      .then((resp) => {
        return resolve(resp.get({ plain: true }))
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }

  define.obtenerPorPuestoTrabajo = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          puestos_trabajo_id: id
        }
      })
      .then((resp) => {
        return resolve(resp)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }
  return define
}
