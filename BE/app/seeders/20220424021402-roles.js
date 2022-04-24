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

        return queryInterface.bulkInsert("roles", [{
                rolename: "administrator",
                isDeleted: false,
                userCreate: "administrator",
                deleteUser: "",
                updateUser: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                rolename: "shipper",
                isDeleted: false,
                userCreate: "administrator",
                deleteUser: "",
                updateUser: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                rolename: "staff",
                isDeleted: false,
                userCreate: "administrator",
                deleteUser: "",
                updateUser: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                rolename: "user",
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