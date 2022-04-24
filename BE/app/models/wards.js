"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class wards extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    wards.init({
        wardName: DataTypes.STRING,
        districtCode: DataTypes.STRING,
        wardCode: DataTypes.STRING,
        path: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "wards",
    });
    return wards;
};