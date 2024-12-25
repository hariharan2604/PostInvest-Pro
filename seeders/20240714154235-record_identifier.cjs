'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const record_identifier = [
      {
        id: "98a1c6f0-d8c3-4a37-a4d4-63ca6c43091b",
        record_identifier_name: "rebate",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "a1a833ad-d851-4ac0-b73a-da98c9f4d96f",
        record_identifier_name: "installment",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "32a101fe-09e0-4706-887b-122acfce12d0",
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
