'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productColors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productColors.init({
    colorName: DataTypes.STRING,
    colorCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productColors',
  });
  return productColors;
};