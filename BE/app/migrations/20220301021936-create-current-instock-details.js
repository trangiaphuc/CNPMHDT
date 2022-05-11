"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("currentInstockDetails", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            IMEI: {
                type: Sequelize.STRING,
            },
            orderId: {
                type: Sequelize.BOOLEAN,
            },
            isOrder: {
                type: Sequelize.BOOLEAN,
            },
            SODetailId: {
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
        await queryInterface.dropTable("currentInstockDetails");
    },
};