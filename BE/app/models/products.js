'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    productName: DataTypes.STRING,
    isRequestIMEI: DataTypes.BOOLEAN,
    VAT: DataTypes.FLOAT,
    deliveryVehicle: DataTypes.INTEGER,
    isInputIMEI: DataTypes.BOOLEAN,
    isGiftVoucher: DataTypes.BOOLEAN,
    isCanReturnOutput: DataTypes.BOOLEAN,
    isDelete: DataTypes.BOOLEAN,
    userCreate: DataTypes.INTEGER,
    userUpdate: DataTypes.INTEGER,
    userDelete: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};