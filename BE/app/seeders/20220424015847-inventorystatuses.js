"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        return queryInterface.bulkInsert("inventorystatuses", [{
                inventoryStatusName: "Mới",
                isDeleted: false,
                userCreate: "administrator",
                userDelete: "",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                inventoryStatusName: "99%",
                isDeleted: false,
                userCreate: "administrator",
                userDelete: "",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                inventoryStatusName: "90%",
                isDeleted: false,
                userCreate: "administrator",
                userDelete: "",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};