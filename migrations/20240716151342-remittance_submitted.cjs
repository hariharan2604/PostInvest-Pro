'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RemittanceSubmitted', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
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
      receipt_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      no_of_installments: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      remitted_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      cheque_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      investment_acc_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bank_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sb_acc_number: {
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
    await queryInterface.dropTable('RemittanceSubmitted');
  }
};
