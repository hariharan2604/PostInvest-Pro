'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const investment_status = [
      {
        id: "3ab67c8f-6cd2-46e9-9823-800edb871621",
        investment_status_name: "open",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "0cdffbc7-6e5e-4aa1-9160-4ca85a2245dd",
        investment_status_name: "preclosed",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "1a9d7dad-0f2d-4f85-8346-3155bcc55ece",
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
