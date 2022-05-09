'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productContent.init({
    content: DataTypes.STRING,
    isImage: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'productContent',
  });
  return productContent;
};