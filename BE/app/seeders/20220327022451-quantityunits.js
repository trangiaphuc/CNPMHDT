'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert(
      'quantityunits',
      [
        {
          "quantityUnitName": "cái",
          "isDelete": false,
          "userCreate": "administrator",
          "userUpdate": "administrator",
          "userDelete": "administrator",
          "createdAt": new Date(),
          "updatedAt": new Date(),
        },
      ])
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
