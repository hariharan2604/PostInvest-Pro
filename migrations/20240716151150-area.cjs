'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Area', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      area_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zip: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      city_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Area');
  }
};
