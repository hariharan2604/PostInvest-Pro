'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Investment', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
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
      investment_acc_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scheme_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'SchemeDetail', // name of the target model (Agent)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      investment_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tenure: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      installment_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      investment_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      next_installment_due: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'InvestmentStatus', // name of the target model (Agent)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Investment');
  }
};
