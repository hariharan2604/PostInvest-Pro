'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ReceiptCollection', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      receipt_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      receipt_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      customer_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      receipt_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      chq_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cheque_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      bank_id: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      instrument_class: {
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
    await queryInterface.dropTable('ReceiptCollection');
  }
};
