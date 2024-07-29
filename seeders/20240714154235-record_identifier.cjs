'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const record_identifier = [
      {
        id: uuidv4(),
        record_identifier_name: "rebate",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        record_identifier_name: "installment",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        record_identifier_name: "penalty",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('RecordIdentifier', record_identifier, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('RecordIdentifier', null, {});
  }
};
