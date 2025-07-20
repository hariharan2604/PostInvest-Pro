'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableName ='ReceiptType'
    const data = [
      {
        id: "e35ad61e-2cb8-4110-b37c-dae78658521e",
        receipt_type_name: "cash",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "a2b4f588-c31b-48a1-88d8-5d7958be432c",
        receipt_type_name: "cheque",
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
    await queryInterface.bulkDelete('ReceiptType', null, {});
  }
};
