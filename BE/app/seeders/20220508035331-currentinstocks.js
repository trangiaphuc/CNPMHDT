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
        return queryInterface.bulkInsert("currentinstocks", [{
                storeId: 1,
                productId: 2,
                inventoryStatusId: 1,
                brandId: 1,
                quantity: 23,
            },
            {
                storeId: 1,
                productId: 3,
                inventoryStatusId: 1,
                brandId: 1,
                quantity: 10,
            },
            {
                storeId: 1,
                productId: 4,
                inventoryStatusId: 1,
                brandId: 1,
                quantity: 19,
            },
            {
                storeId: 1,
                productId: 5,
                inventoryStatusId: 1,
                brandId: 1,
                quantity: 21,
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