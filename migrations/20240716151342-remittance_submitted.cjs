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
        references: {
          model: 'RemittanceProcess', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      process_calendar_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ProcessCalendar', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      receipt_type_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ReceiptType', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
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
