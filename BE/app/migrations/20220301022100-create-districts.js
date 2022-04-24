"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("districts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            districtName: {
                type: Sequelize.STRING,
            },
            districtCode: {
                type: Sequelize.STRING,
            },
            provinceCode: {
                type: Sequelize.STRING,
            },
            path: {
                type: Sequelize.STRING,
            },
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
        await queryInterface.dropTable("districts");
    },
};