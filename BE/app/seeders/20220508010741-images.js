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

        return queryInterface.bulkInsert("images", [{
                imageUri: "/resources/images/productImages/galaxy-s22-ultra-burgundy.jpg",
            },
            {
                imageUri: "/resources/images/productImages/galaxy-s22-ultra-den.jpg",
            },
            {
                imageUri: "/resources/images/productImages/galaxy-s22-ultra-white.jpg",
            },
            {
                imageUri: "/resources/images/productImages/galaxy-s22-ultra-xanh.jpg",
            },
            {
                imageUri: "/resources/images/productImages/nubia-red-magic-7-pro.jpg",
            },
            {
                imageUri: "/resources/images/productImages/nubia-red-magic-7-pro.jpg",
            },
            {
                imageUri: "/resources/images/productImages/nubia-red-magic-7-pro-den.jpg",
            },
            {
                imageUri: "/resources/images/productImages/nubia-red-magic-7-pro-trong-suot.jpg",
            },
            {
                imageUri: "/resources/images/productImages/redmi-k50-gaming-mercedes-amg-edition.jpg",
            },
            {
                imageUri: "/resources/images/productImages/asus-rog-phone-5-black.jpg",
            },
            {
                imageUri: "/resources/images/productImages/samsung-galaxy-tab-s7-fe-den.jpg",
            },
            {
                imageUri: "/resources/images/productImages/samsung-galaxy-tab-s7-fe-xanh.jpg",
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