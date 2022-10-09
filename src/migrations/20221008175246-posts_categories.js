'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primary: true,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
