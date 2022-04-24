"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("provinces", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            provinceName: {
                type: Sequelize.STRING,
            },
            provinceCode: {
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
        await queryInterface.dropTable("provinces");
    },
};