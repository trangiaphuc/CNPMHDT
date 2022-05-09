"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("maingroups", [{
                maingroupName: "Điện thoại",
                maingroupIcon: "/resources/images/maingroupIcons/smartphone.png",
                isDelete: false,
                userCreate: "admin",
                userUpdate: "admin",
                userDelete: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maingroupName: "Tablet",
                maingroupIcon: "/resources/images/maingroupIcons/tablet.png",
                isDelete: false,
                userCreate: "admin",
                userUpdate: "admin",
                userDelete: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maingroupName: "Loa- tai nghe",
                maingroupIcon: "/resources/images/maingroupIcons/headphones.png",
                isDelete: false,
                userCreate: "admin",
                userUpdate: "admin",
                userDelete: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                maingroupName: "Pin- sạc dự phòng",
                maingroupIcon: "/resources/images/maingroupIcons/battery-charge.png",
                isDelete: false,
                userCreate: "admin",
                userUpdate: "admin",
                userDelete: null,
                createdAt: new Date(),
                updatedAt: new Date(),
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