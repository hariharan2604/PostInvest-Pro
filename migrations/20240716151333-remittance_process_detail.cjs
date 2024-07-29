'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RemittanceProcessDetail', {
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
      customer_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Customer', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      investment_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Investment', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      receipt_detail_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'ReceiptDetail', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      receipt_type_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'ReceiptType', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      receipt_collection_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'ReceiptCollection', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      remittance_amount: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      no_of_installments: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      record_identifier: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'RecordIdentifier', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      cheque_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      investment_acc_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bank_name: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('RemittanceProcessDetail');
  }
};
