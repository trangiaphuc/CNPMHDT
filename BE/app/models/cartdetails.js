'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cartDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cartDetails.init({
    quantity: DataTypes.INTEGER,
    isBuy: DataTypes.BOOLEAN,
    isDelete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'cartDetails',
  });
  return cartDetails;
};