'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const receipt_type = [
      {
        id: uuidv4(),
        instrument_class_name: "dop"
      },
      {
        id: uuidv4(),
        instrument_class_name: "others"
      }
    ]
    await queryInterface.bulkInsert('InstrumentClass', receipt_type, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InstrumentClass', null, {});
  }
};
