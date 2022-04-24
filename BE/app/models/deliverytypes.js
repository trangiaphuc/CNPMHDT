"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class deliveryTypes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    deliveryTypes.init({
        deliveryType: DataTypes.STRING,
        shippingFee: DataTypes.FLOAT,
        isDelete: DataTypes.BOOLEAN,
        userCreate: DataTypes.INTEGER,
        userUpdate: DataTypes.INTEGER,
        userDelete: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "deliveryTypes",
    });
    return deliveryTypes;
};