'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const process_calendar = [
      {
        id: uuidv4(),
        year: "2024",
        month: "1",
        period: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "1",
        period: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "2",
        period: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "2",
        period: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "3",
        period: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "3",
        period: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "4",
        period: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "4",
        period: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "5",
        period: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "5",
        period: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "6",
        period: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "6",
        period: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "7",
        period: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        year: "2024",
        month: "7",
        period: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    await queryInterface.bulkInsert('ProcessCalendar', process_calendar, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
