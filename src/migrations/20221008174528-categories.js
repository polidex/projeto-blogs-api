'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primary: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.string,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
