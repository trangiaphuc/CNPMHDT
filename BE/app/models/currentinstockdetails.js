"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class currentInstockDetails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    currentInstockDetails.init({
        IMEI: DataTypes.STRING,
        orderId: DataTypes.BOOLEAN,
        isOrder: DataTypes.BOOLEAN,
        SODetailId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "currentInstockDetails",
    });
    return currentInstockDetails;
};