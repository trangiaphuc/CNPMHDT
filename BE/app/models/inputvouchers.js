'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inputVouchers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  inputVouchers.init({
    invoiceId: DataTypes.INTEGER,
    invoiceDate: DataTypes.DATEONLY,
    VAT: DataTypes.FLOAT,
    totalAmount: DataTypes.FLOAT,
    staffUserId: DataTypes.INTEGER,
    customerName: DataTypes.STRING,
    customerAddress: DataTypes.STRING,
    customerPhone: DataTypes.STRING,
    taxId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'inputVouchers',
  });
  return inputVouchers;
};