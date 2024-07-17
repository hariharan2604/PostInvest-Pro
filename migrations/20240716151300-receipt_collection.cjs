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
        references: {
          model: 'ReceiptType', // name of the target model (Agent)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      receipt_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      customer_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Customer', // name of the target model (Agent)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
        references: {
          model: 'BankDetail', // name of the target model (Agent)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      instrument_class_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'InstrumentClass', // name of the target model (Agent)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
