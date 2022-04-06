'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'maingroups',
      [
        {
          maingroupName: "Điện thoại",
          isDelete: false,
          userCreate: "admin",
          userUpdate: "admin",
          userDelete: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maingroupName: "Máy tính",
          isDelete: false,
          userCreate: "admin",
          userUpdate: "admin",
          userDelete: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
