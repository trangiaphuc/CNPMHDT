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

        return queryInterface.bulkInsert("deliverystatuses", [{
                deliveryTypes: "Giao hàng tận nơi",
                shippingFee: 15000,
                isDeleted: false,
                userCreate: "administrator",
                userDelete: "",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                deliveryTypes: "Nhận tại cửa hàng",
                shippingFee: 0,
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