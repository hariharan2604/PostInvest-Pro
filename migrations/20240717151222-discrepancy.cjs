"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Discrepancy", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV7,
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
        references: {
          model: "RemittanceProcess", // name of the target model (Agents)
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      process_calendar_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "ProcessCalendar", // name of the target model (Agents)
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("Discrepancy");
  },
};
