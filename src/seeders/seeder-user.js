'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'min',
      lastName: 'ad',
      address: 'USA',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'andvph27911@fpt.edu.vn',
      password: '123456',
      firstName: 'an',
      lastName: 'dư',
      address: 'VN',
      gender: 1,
      typeRole: 'ROLE',
      keyRole: 'R2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
