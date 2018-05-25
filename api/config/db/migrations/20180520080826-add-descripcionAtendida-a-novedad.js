'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('novedades', 'descripcionAtendida', Sequelize.STRING)
  },
  down: (queryInterface, Sequelize) => {
  }
}
