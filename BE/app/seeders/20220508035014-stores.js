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
        return queryInterface.bulkInsert("stores", [{
                // storeName: "Kho I",
                storeName: "Kho Hà Nội",
                isDelete: false,
                userCreate: "administrator",
                provinceId: 1,
                districtId: 1,
                wardId: 1,
            },
            {
                // storeName: "Kho II",
                storeName: "Kho Thành phố Hồ Chí Minh",
                isDelete: false,
                userCreate: "administrator",
                provinceId: 34,
                districtId: 71,
                wardId: 132,
            },
            {
                // storeName: "Kho III",
                storeName: "Kho Cần Thơ",
                isDelete: false,
                userCreate: "administrator",
                provinceId: 23,
                districtId: 45,
                wardId: 15,
            },
            {
                // storeName: "Kho III",
                storeName: "Kho Bến Tre",
                isDelete: false,
                userCreate: "administrator",
                provinceId: 23,
                districtId: 45,
                wardId: 15,
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