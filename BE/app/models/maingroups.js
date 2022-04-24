"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class maingroups extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    maingroups.init({
        maingroupName: DataTypes.STRING,
        maingroupIcon: DataTypes.STRING,
        isDelete: DataTypes.BOOLEAN,
        userCreate: DataTypes.INTEGER,
        userUpdate: DataTypes.INTEGER,
        userDelete: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "maingroups",
    });
    return maingroups;
};