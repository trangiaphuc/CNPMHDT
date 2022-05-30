"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("models", [{
                modelName: "SAMSUNG S22 ULTRA-8GB",
                modelProductId: 1,
                isDelete: false,
            },
            {
                modelName: "SAMSUNG S22 ULTRA-16GB",
                modelProductId: 6,
                isDelete: false,
            },
            {
                modelName: "SAMSUNG S22 ULTRA-12GB",
                modelProductId: 7,
                isDelete: false,
            },
            {
                modelName: "NUBIA REDMAGIC 7 12-256GB",
                modelProductId: 15,
                isDelete: false,
            },
            {
                modelName: "Xiaomi Redmi K50 Gaming Mercedes AMG Edition",
                modelProductId: 19,
                isDelete: false,
            },
            {
                modelName: "Asus ROG Phone 5",
                modelProductId: 21,
                isDelete: false,
            },
            {
                modelName: "Samsung Galaxy Tab S7 FE (4G, Wifi)",
                modelProductId: 23,
                isDelete: false,
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