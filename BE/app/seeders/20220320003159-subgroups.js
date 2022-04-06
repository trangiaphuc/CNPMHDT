'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'subgroups',
      [
        {
          subgroupName: "Smartphone",
          isDelete: false,
          userCreate: "admin",
          userUpdate: "admin",
          userDelete: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          maingroupId: 1
        },
        {
          subgroupName: "Điện thoại di động",
          isDelete: false,
          userCreate: "admin",
          userUpdate: "admin",
          userDelete: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          maingroupId: 1
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
