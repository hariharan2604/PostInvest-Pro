'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const investment_status = [
      {
        id: uuidv4(),
        investment_status_name: "open",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        investment_status_name: "preclosed",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        investment_status_name: "closed",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('InvestmentStatus', investment_status, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InvestmentStatus', null, {});
  }
};
