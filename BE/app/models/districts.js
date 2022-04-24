"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class districts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    districts.init({
        districtName: DataTypes.STRING,
        districtCode: DataTypes.STRING,
        provinceCode: DataTypes.STRING,
        path: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "districts",
    });
    return districts;
};