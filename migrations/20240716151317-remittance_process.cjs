'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RemittanceProcess', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      process_calendar_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      lot: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      process_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      remitted_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      remittance_process_status: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      dc_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RemittanceProcess');
  }
};
