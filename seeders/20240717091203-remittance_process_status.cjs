'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableName = "RemittanceProcessStatus";
    const data = [
      {
        id: "ed0a1383-98ac-4ce5-8719-f816c0d23a4c",
        remittance_process_status_name: "open",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "2316a730-dbaf-4d9a-903a-e0f546b6d913",
        remittance_process_status_name: "completed",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "d2b61b62-4043-4746-aac4-0eb627cf15d2",
        remittance_process_status_name: "remitted",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "64caa643-04b3-478f-b97b-9d9884acd2d6",
        remittance_process_status_name: "rejected",
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
    await queryInterface.bulkDelete('RemittanceProcessStatus', null, {});
  }
};
