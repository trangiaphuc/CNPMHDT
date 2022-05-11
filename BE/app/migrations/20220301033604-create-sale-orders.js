"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("saleOrders", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            deliveryAddress: {
                type: Sequelize.STRING,
            },
            note: {
                type: Sequelize.STRING,
            },
            totalMoney: {
                type: Sequelize.FLOAT,
            },
            shippingCost: {
                type: Sequelize.FLOAT,
            },
            debt: {
                type: Sequelize.FLOAT,
            },
            totalPaid: {
                type: Sequelize.FLOAT,
            },
            outputStoreId: {
                type: Sequelize.INTEGER,
            },
            isDelete: {
                type: Sequelize.BOOLEAN,
            },
            userDelete: {
                type: Sequelize.INTEGER,
            },
            deliveryStaff: {
                type: Sequelize.INTEGER,
            },
            outputUser: {
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
        await queryInterface.dropTable("saleOrders");
    },
};