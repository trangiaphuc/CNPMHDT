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