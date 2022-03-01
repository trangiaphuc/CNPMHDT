'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inputVoucherDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  inputVoucherDetails.init({
    quantity: DataTypes.INTEGER,
    inputPrice: DataTypes.FLOAT,
    VAT: DataTypes.FLOAT,
    inputDate: DataTypes.DATEONLY,
    inputUser: DataTypes.INTEGER,
    deleteUser: DataTypes.INTEGER,
    deleteDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'inputVoucherDetails',
  });
  return inputVoucherDetails;
};