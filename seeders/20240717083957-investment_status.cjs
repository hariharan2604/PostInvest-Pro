'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableName = 'InvestmentStatus';

    const data = [
      {
        id: "3ab67c8f-6cd2-46e9-9823-800edb871621",
        investment_status_name: "open",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "0cdffbc7-6e5e-4aa1-9160-4ca85a2245dd",
        investment_status_name: "preclosed",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "1a9d7dad-0f2d-4f85-8346-3155bcc55ece",
        investment_status_name: "closed",
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InvestmentStatus', null, {});
  }
};
