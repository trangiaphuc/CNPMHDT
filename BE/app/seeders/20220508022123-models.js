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