'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const scheme_detail = [
      {
        "id":uuidv4(),
        "scheme_code": "SB",
        "scheme_name": "Post Office Savings Account"
      },
      {
        "id": uuidv4(),
        "scheme_code": "RD",
        "scheme_name": "National Savings Recurring Deposit Account"
      },
      {
        "id": uuidv4(),
        "scheme_code": "TD",
        "scheme_name": "National Savings Time Deposit Account"
      },
      {
        "id": uuidv4(),
        "scheme_code": "MIS",
        "scheme_name": "National Savings Monthly Income Account"
      },
      {
        "id": uuidv4(),
        "scheme_code": "SCSS",
        "scheme_name": "Senior Citizens Savings Scheme Account"
      },
      {
        "id": uuidv4(),
        "scheme_code": "PPF",
        "scheme_name": "Public Provident Fund Account"
      },
      {
        "id": uuidv4(),
        "scheme_code": "SSA",
        "scheme_name": "Sukanya Samriddhi Account"
      },
      {
        "id": uuidv4(),
        "scheme_code": "NSC",
        "scheme_name": "National Savings Certificates (VIIIth Issue)"
      },
      {
        "id": uuidv4(),
        "scheme_code": "KVP",
        "scheme_name": "Kisan Vikas Patra"
      }
    ]
    await queryInterface.bulkInsert('SchemeDetail', scheme_detail, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SchemeDetail', null, {});

  }
};
