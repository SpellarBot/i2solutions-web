'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.describeTable('novedades')
      .then((resp) => {
        if (!resp['descripcionAtendida']) {
          return queryInterface.addColumn('novedades', 'descripcionAtendida', Sequelize.STRING)
        }
        return ''
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.describeTable('novedades')
      .then((resp) => {
        if (resp['descripcionAtendida']) {
          return queryInterface.removeColumn('novedades', 'descripcionAtendida')
        }
        return ''
      })
  }
}
