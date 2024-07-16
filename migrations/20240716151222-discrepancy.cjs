'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Discrepancy', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      reason: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      remittance_process_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      process_calendar_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      customer_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      investment_acc_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cheque_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cheque_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      month: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      period: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      lot: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discrepancy_date: {
        type: Sequelize.DATE,
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Discrepancy');
  }
};
