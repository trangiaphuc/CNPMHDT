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
                deliveryStatusName: "Chờ duyệt",
                isDelete: false,
                userCreate: "administrator",
                userDelete: "",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                deliveryStatusName: "Đã duyệt",
                isDelete: false,
                userCreate: "administrator",
                userDelete: "",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                deliveryStatusName: "Đang giao hàng",
                isDelete: false,
                userCreate: "administrator",
                userDelete: "",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                deliveryStatusName: "Đã giao hàng",
                isDelete: false,
                userCreate: "administrator",
                userDelete: "",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                deliveryStatusName: "Giao hàng thành công",
                isDelete: false,
                userCreate: "administrator",
                userDelete: "",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                deliveryStatusName: "Đã hủy",
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