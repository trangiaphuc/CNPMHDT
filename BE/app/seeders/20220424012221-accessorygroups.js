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
                accessoryId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 2,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 3,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 4,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 5,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 6,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 7,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },

            {
                accessoryId: 1,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 2,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 3,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 4,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 8,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 6,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 7,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 9,
                subgroupId: 2,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 1,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 2,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 3,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 4,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 5,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 6,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 7,
                subgroupId: 1,
                quantity: 1,
                quantityUnitId: 1,
            },

            {
                accessoryId: 1,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 2,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 3,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 4,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 5,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 6,
                subgroupId: 3,
                quantity: 1,
                quantityUnitId: 1,
            },
            {
                accessoryId: 7,
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