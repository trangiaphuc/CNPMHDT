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

        return queryInterface.bulkInsert("currentInstockDetails", [{
                IMEI: "210620001111001",
                orderId: null,
                isOrder: 0,
                SODetailId: null,
                inventoryStatusId: 1,
                storeId: 1,
                // inputVoucherDetailId: ,
                // currentInstockId: 1,
            },
            {
                IMEI: "210620001111002",
                orderId: null,
                isOrder: 0,
                SODetailId: null,
                inventoryStatusId: 1,
                storeId: 1,
            },
            {
                IMEI: "210620001111003",
                orderId: null,
                isOrder: 0,
                SODetailId: null,
                inventoryStatusId: 1,
                storeId: 1,
            },
            {
                IMEI: "210620001111004",
                orderId: null,
                isOrder: 0,
                SODetailId: null,
                inventoryStatusId: 1,
                storeId: 1,
            },
            {
                IMEI: "210620001111005",
                orderId: null,
                isOrder: 0,
                SODetailId: null,
                inventoryStatusId: 1,
                storeId: 1,
            },
            {
                IMEI: "210620001111006",
                orderId: null,
                isOrder: 0,
                SODetailId: null,
                inventoryStatusId: 1,
                storeId: 1,
            },
            {
                IMEI: "210620001111007",
                orderId: null,
                isOrder: 0,
                SODetailId: null,
                inventoryStatusId: 1,
                storeId: 1,
            },
            {
                IMEI: "210620001111008",
                orderId: null,
                isOrder: 0,
                SODetailId: null,
                inventoryStatusId: 1,
                storeId: 1,
            },
            {
                IMEI: "210620001111009",
                orderId: null,
                isOrder: 0,
                SODetailId: null,
                inventoryStatusId: 1,
                storeId: 1,
            },
            {
                IMEI: "210620001111010",
                orderId: null,
                isOrder: 0,
                SODetailId: null,
                inventoryStatusId: 1,
                storeId: 1,
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