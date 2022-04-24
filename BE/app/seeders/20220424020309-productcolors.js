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
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Trắng",
                colorCode: "#FFFFFF",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Hồng",
                colorCode: "#FCD4CB",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Xanh",
                colorCode: "#CDE8E1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Vàng",
                colorCode: "#FDF0A2",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Xanh dương",
                colorCode: "#C6D2EB",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Đỏ",
                colorCode: "#FF0000",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Xám",
                colorCode: "#696A6C",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Đỏ vang",
                colorCode: "#5F4247",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Xanh rêu",
                colorCode: "#354D49",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Gold",
                colorCode: "#F9EAC8",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                colorname: "Midnight Green",
                colorCode: "#495B35",
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