'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const receipt_validity = [
      {
        id: "69f12a39-0b8d-48b4-acd8-520d02b527f2",
        status: "valid",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "93d2df65-2bfa-4637-8e20-0e6fa706e944",
        status: "expired",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('ReceiptValidity', receipt_validity, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReceiptValidity', null, {});
  }
};
