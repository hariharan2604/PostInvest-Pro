'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableName = "ReceiptValidity";
    const data = [
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
    await queryInterface.bulkDelete('ReceiptValidity', null, {});
  }
};
