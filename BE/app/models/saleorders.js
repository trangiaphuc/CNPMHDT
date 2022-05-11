"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class saleOrders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    saleOrders.init({
        deliveryAddress: DataTypes.STRING,
        note: DataTypes.STRING,
        totalMoney: DataTypes.FLOAT,
        shippingCost: DataTypes.FLOAT,
        debt: DataTypes.FLOAT,
        totalPaid: DataTypes.FLOAT,
        outputStoreId: DataTypes.INTEGER,
        isDelete: DataTypes.BOOLEAN,
        userDelete: DataTypes.INTEGER,
        deliveryStaff: DataTypes.INTEGER,
        outputUser: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "saleOrders",
    });
    return saleOrders;
};