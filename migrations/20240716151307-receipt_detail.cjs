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
        references: {
          model: 'Investment', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      receipt_collection_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ReceiptCollection', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      remittance_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      no_of_installments: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      receipt_validity: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'ReceiptValidity', // name of the target model (Agents)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('ReceiptDetail');
  }
};
