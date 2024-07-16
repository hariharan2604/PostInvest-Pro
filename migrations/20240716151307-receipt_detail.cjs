'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ReceiptDetail', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      investment_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      receipt_collection_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      remittance_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      no_of_installments: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('ReceiptDetail');
  }
};
