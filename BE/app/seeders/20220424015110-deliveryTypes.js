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

        return queryInterface.bulkInsert("deliverytypes", [{
                deliveryType: "Giao hàng tận nơi",
                shippingFee: 15000,
                isDelete: false,
                userCreate: "administrator",
                userDelete: "",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                deliveryType: "Nhận tại cửa hàng",
                shippingFee: 0,
                isDelete: false,
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