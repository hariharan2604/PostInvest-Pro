'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableName = 'SchemeDetail';

    const data = [
      {
        id: "0295c140-d6f3-4894-bffa-94eef13a94c0",
        scheme_code: "SSA",
        scheme_name: "Sukanya Samriddhi Account",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "08677f06-1cb5-45e9-bbf9-b831a73d29f2",
        scheme_code: "KVP",
        scheme_name: "Kisan Vikas Patra",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "19489d05-f2d4-40d3-b1ce-70113998cdbe",
        scheme_code: "SCSS",
        scheme_name: "Senior Citizens Savings Scheme Account",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "27a75f8c-583c-46d8-af3e-38bb8d7dae5a",
        scheme_code: "TD",
        scheme_name: "National Savings Time Deposit Account",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "4093b5c7-956c-432e-a0c9-ee1bf8ec88d9",
        scheme_code: "SB",
        scheme_name: "Post Office Savings Account",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "4708f6ab-36fa-47a1-941c-ca1f519f7d5a",
        scheme_code: "PPF",
        scheme_name: "Public Provident Fund Account",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "6a926817-4b9a-4d6e-b2bf-6198ec2dd952",
        scheme_code: "NSC",
        scheme_name: "National Savings Certificates (VIIIth Issue)",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "99d23752-f31b-46f3-a251-06f448f20dad",
        scheme_code: "RD",
        scheme_name: "National Savings Recurring Deposit Account",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "ecca4f39-acdb-4c80-a9f7-bfdeb30ff36a",
        scheme_code: "MIS",
        scheme_name: "National Savings Monthly Income Account",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    for (const item of data) {
      const exists = await queryInterface.rawSelect(
        tableName,
        {
          where: { id: item.id }
        },
        ['id']
      );

      if (!exists) {
        await queryInterface.bulkInsert(tableName, [item], {});
      }
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SchemeDetail', null, {});

  }
};
