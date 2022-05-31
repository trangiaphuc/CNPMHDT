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

        return queryInterface.bulkInsert("users", [{
                id: 165105,
                username: "shipper1",
                password: "$2a$08$QkFhYTvcJpurJFf0MlILuOfyy8pM36vpj1yG3EZqpr5DdWevDN9QO",
                firstName: "Síp",
                lastName: "bơ 1",
                email: "sipperman@gmail.com",
                phone: "0999123456",
                birthday: null,
                gender: 1,
                provinceId: 1,
                districtId: 1,
                wardId: 1,
                userStatusId: 1,
                imageId: null,
            },
            {
                id: 165167,
                username: "shipper2",
                password: "$2a$08$QkFhYTvcJpurJFf0MlILuOfyy8pM36vpj1yG3EZqpr5DdWevDN9QO",
                firstName: "Ái àm",
                lastName: "síp bờ 2",
                email: "sipperman@gmail.com",
                phone: "0999123456",
                birthday: null,
                gender: 1,
                provinceId: 1,
                districtId: 1,
                wardId: 1,
                userStatusId: 1,
                imageId: null,
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