'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.describeTable('accidentes')
      .then((resp) => {
        if (!resp['diasPerdidos']) {
          return queryInterface.addColumn('accidentes', 'diasPerdidos', Sequelize.INTEGER)
        }
        return ''
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.describeTable('accidentes')
      .then((resp) => {
        if (resp['diasPerdidos']) {
          return queryInterface.removeColumn('accidentes', 'diasPerdidos')
        }
        return ''
      })
  }
};
