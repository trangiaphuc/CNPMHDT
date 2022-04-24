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
                isDelete: false,
                userCreate: "administrator",
                deleteUser: "",
                updateUser: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                rolename: "shipper",
                isDelete: false,
                userCreate: "administrator",
                deleteUser: "",
                updateUser: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                rolename: "staff",
                isDelete: false,
                userCreate: "administrator",
                deleteUser: "",
                updateUser: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                rolename: "user",
                isDelete: false,
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