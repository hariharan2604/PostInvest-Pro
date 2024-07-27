'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const receipt_validity = [
      {
        id: uuidv4(),
        status: "valid",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
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
