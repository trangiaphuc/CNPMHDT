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
        return queryInterface.bulkInsert("productcolors", [{
                colorname: "Đen",
                colorCode: "#000000",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Trắng",
                colorCode: "#FFFFFF",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Hồng",
                colorCode: "#FCD4CB",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Xanh",
                colorCode: "#CDE8E1",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Vàng",
                colorCode: "#FDF0A2",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Xanh dương",
                colorCode: "#C6D2EB",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Đỏ",
                colorCode: "#FF0000",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Xám",
                colorCode: "#696A6C",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Đỏ vang",
                colorCode: "#5F4247",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Xanh rêu",
                colorCode: "#354D49",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Gold",
                colorCode: "#F9EAC8",
                userUpdate: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Midnight Green",
                colorCode: "#495B35",
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