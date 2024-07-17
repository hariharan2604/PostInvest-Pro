'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const investment_status = [
      {
        id: uuidv4(),
        investment_status_name:"open"
      },
      {
        id: uuidv4(),
        investment_status_name:"preclosed"
      },
      {
        id: uuidv4(),
        investment_status_name:"closed"
      }
    ]
    await queryInterface.bulkInsert('InvestmentStatus', investment_status, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InvestmentStatus', null, {});
  }
};
