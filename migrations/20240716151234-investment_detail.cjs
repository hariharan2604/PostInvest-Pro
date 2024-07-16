'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('InvestmentDetail', {
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
      installment_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      no_of_installment: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      remittance_date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('InvestmentDetail');
  }
};
