"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("subgroups", [{
                subgroupName: "Smartphone",
                isDelete: false,
                userCreate: "admin",
                userUpdate: "admin",
                userDelete: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                maingroupId: 1,
            },
            {
                subgroupName: "Gaming phone",
                isDelete: false,
                userCreate: "admin",
                userUpdate: "admin",
                userDelete: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                maingroupId: 1,
            },
            {
                subgroupName: "Tablet",
                isDelete: false,
                userCreate: "admin",
                userUpdate: "admin",
                userDelete: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                maingroupId: 2,
            },
            {
                subgroupName: "Loa",
                isDelete: false,
                userCreate: "admin",
                userUpdate: "admin",
                userDelete: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                maingroupId: 3,
            },
            {
                subgroupName: "Pin",
                isDelete: false,
                userCreate: "admin",
                userUpdate: "admin",
                userDelete: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                maingroupId: 3,
            },
            {
                subgroupName: "Sạc dự phòng",
                isDelete: false,
                userCreate: "admin",
                userUpdate: "admin",
                userDelete: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                maingroupId: 1,
            },
        ]);
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
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