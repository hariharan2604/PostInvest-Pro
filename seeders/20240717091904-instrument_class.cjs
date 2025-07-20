'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableName = "InstrumentClass";
    const data = [
      {
        id: "72459613-8d19-497b-a2a5-4be980740a10",
        instrument_class_name: "dop",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "9b6ce667-f95c-4675-b848-2ac107e4b92e",
        instrument_class_name: "others",
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
    await queryInterface.bulkDelete('InstrumentClass', null, {});
  }
};
