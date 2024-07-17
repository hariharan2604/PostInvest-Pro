'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const remittance_process_status = [
      {
        id: uuidv4(),
        remittance_process_status_name: "open"
      },
      {
        id: uuidv4(),
        remittance_process_status_name: "completed"
      },
      {
        id: uuidv4(),
        remittance_process_status_name: "remitted"
      },
      {
        id: uuidv4(),
        remittance_process_status_name: "rejected"
      }
    ]
    await queryInterface.bulkInsert('RemittanceProcessStatus', remittance_process_status, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('RemittanceProcessStatus', null, {});
  }
};
