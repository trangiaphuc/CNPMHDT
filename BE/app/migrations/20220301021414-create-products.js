"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            productName: {
                type: Sequelize.STRING,
            },
            salePrice: {
                type: Seuquelize.FLOAT,
            },
            isRequestIMEI: {
                type: Sequelize.BOOLEAN,
            },
            VAT: {
                type: Sequelize.FLOAT,
            },
            RAM: { type: Sequelize.STRING },
            deliveryVehicle: {
                type: Sequelize.INTEGER,
            },
            isInputIMEI: {
                type: Sequelize.BOOLEAN,
            },
            isGiftVoucher: {
                type: Sequelize.BOOLEAN,
            },
            isCanReturnOutput: {
                type: Sequelize.BOOLEAN,
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
        await queryInterface.dropTable("products");
    },
};