'use strict';

module.exports = {
  /**
* @param {import('sequelize').QueryInterface} queryInterface
* @param {import('sequelize').DataTypes} Sequelize
*/ 
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      displayName: {
        type: Sequelize.STRING,
        field: 'display_name',
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
