"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("deliveryTypes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            deliveryType: {
                type: Sequelize.STRING,
            },
            shippingFee: {
                type: Sequelize.FLOAT,
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
        await queryInterface.dropTable("deliveryTypes");
    },
};