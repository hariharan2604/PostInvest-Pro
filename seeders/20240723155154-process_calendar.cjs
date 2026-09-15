'use strict';

module.exports = {
  async up(queryInterface) {
    const { v7: uuidv7 } = await import('uuid');

    const tableName = 'ProcessCalendar';
    const data = [];

    for (let month = 1; month <= 7; month++) {
      for (let period = 1; period <= 2; period++) {
        data.push({
          id: uuidv7(),
          year: '2024',
          month: String(month),
          period: String(period),
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    for (const item of data) {
      const exists = await queryInterface.rawSelect(
        tableName,
        {
          where: {
            year: item.year,
            month: item.month,
            period: item.period,
          },
        },
        ['id']
      );

      if (!exists) {
        await queryInterface.bulkInsert(tableName, [item]);
      }
    }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ProcessCalendar', {
      year: '2024',
    });
  },
};