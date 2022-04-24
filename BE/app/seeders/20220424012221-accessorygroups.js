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
         *
         *
         */

        return queryInterface.bulkInsert("accessorygroups", [{
                acessoryId: 1,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 2,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 3,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 4,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 5,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 6,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 7,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },

            {
                acessoryId: 1,
                maingroupId: 1,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 2,
                maingroupId: 1,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 3,
                maingroupId: 1,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 4,
                maingroupId: 1,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 8,
                maingroupId: 1,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 6,
                maingroupId: 1,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 7,
                maingroupId: 1,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 9,
                maingroupId: 1,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 1,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 2,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 3,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 4,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 5,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 6,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 7,
                maingroupId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },

            {
                acessoryId: 1,
                maingroupId: 2,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 2,
                maingroupId: 2,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 3,
                maingroupId: 2,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 4,
                maingroupId: 2,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 5,
                maingroupId: 2,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 6,
                maingroupId: 2,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                acessoryId: 7,
                maingroupId: 2,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
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