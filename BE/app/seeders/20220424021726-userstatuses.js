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

        return queryInterface.bulkInsert("userstatues", [{
                userstatusName: "Đang hoạt động",
                isDeleted: false,
                userCreate: "administrator",
                deleteUser: "",
                updateUser: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userstatusName: "Dừng hoạt động",
                isDeleted: false,
                userCreate: "administrator",
                deleteUser: "",
                updateUser: "administrator",
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