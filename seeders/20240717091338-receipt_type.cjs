'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const receipt_type = [
      {
        id: uuidv4(),
        receipt_type_name: "cash",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        receipt_type_name: "cheque",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('ReceiptType', receipt_type, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReceiptType', null, {});
  }
};
