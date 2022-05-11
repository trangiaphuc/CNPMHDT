"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class saleOrderDetails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    saleOrderDetails.init({
        quantity: DataTypes.INTEGER,
        salePrice: DataTypes.FLOAT,
        VAT: DataTypes.FLOAT,
        salePriceInvoiceVAT: DataTypes.FLOAT, //gia sau VAT
    }, {
        sequelize,
        modelName: "saleOrderDetails",
    });
    return saleOrderDetails;
};