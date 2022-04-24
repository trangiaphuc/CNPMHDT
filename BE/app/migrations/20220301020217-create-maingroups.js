"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("maingroups", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            maingroupName: {
                type: Sequelize.STRING,
            },
            maingroupIcon: {
                type: Sequelize.STRING,
            },
            isDelete: {
                type: Sequelize.BOOLEAN,
            },
            userCreate: {
                type: Sequelize.INTEGER,
            },
            userUpdate: {
                type: Sequelize.INTEGER,
            },
            userDelete: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("maingroups");
    },
};