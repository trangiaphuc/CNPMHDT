"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("wards", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            wardName: {
                type: Sequelize.STRING,
            },
            wardCode: {
                type: Sequelize.STRING,
            },
            districtCode: { type: Sequelize.STRING },
            path: { type: Sequelize.STRING },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("wards");
    },
};