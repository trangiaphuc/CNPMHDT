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
        return queryInterface.bulkInsert("brands", [{
                brandName: "Samsung",
                isDelete: false,
                userCreate: "administrator",
                userUpdate: "administrator",
                userDelete: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                brandName: "Xiaomi",
                isDelete: false,
                userCreate: "administrator",
                userUpdate: "administrator",
                userDelete: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                brandName: "Huawei",
                isDelete: true,
                userCreate: "administrator",
                userUpdate: "administrator",
                userDelete: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                brandName: "Nokia",
                isDelete: true,
                userCreate: "administrator",
                userUpdate: "administrator",
                userDelete: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                brandName: "Realme",
                isDelete: true,
                userCreate: "administrator",
                userUpdate: "administrator",
                userDelete: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                brandName: "Asus",
                isDelete: false,
                userCreate: "administrator",
                userUpdate: "administrator",
                userDelete: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                brandName: "VSmart",
                isDelete: true,
                userCreate: "administrator",
                userUpdate: "administrator",
                userDelete: "administrator",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                brandName: "Nubia",
                isDelete: false,
                userCreate: "administrator",
                userUpdate: "administrator",
                userDelete: "administrator",
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