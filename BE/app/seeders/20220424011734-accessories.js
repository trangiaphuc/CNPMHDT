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
        return queryInterface.bulkInsert("accessories", [{
                accessoryName: "Pin",
            },
            {
                accessoryName: "Cáp sạc",
            },
            {
                accessoryName: "Hộp",
            },
            {
                accessoryName: "Sách hướng dẫn",
            },
            {
                accessoryName: "Tai nghe ",
            },
            {
                accessoryName: "Miếng dán màn hình cường lực",
            },
            {
                accessoryName: "Ốp lưng dẻo",
            },
            {
                accessoryName: "Tai nghe TWS P36",
            },
            {
                accessoryName: "Bao ngón tay chơi game cảm ứng ",
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