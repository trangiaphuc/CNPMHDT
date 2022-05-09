'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productInfo.init({
    operatingSystem: DataTypes.STRING,
    language: DataTypes.STRING,
    screenType: DataTypes.STRING,
    screenColor: DataTypes.STRING,
    standerScreen: DataTypes.STRING,
    resolution: DataTypes.STRING,
    wideScreen: DataTypes.STRING,
    touchTechnology: DataTypes.STRING,
    rearCamera: DataTypes.STRING,
    frontCamera: DataTypes.STRING,
    flashLight: DataTypes.STRING,
    cameraFeatures: DataTypes.STRING,
    film: DataTypes.STRING,
    videoCalls: DataTypes.STRING,
    CPUSpeed: DataTypes.STRING,
    multiplier: DataTypes.STRING,
    chipset: DataTypes.STRING,
    RAM: DataTypes.STRING,
    GPU: DataTypes.STRING,
    phonebook: DataTypes.STRING,
    ROM: DataTypes.STRING,
    externalMemoryCard: DataTypes.STRING,
    maximumcardSupport: DataTypes.STRING,
    design: DataTypes.STRING,
    size: DataTypes.STRING,
    weight: DataTypes.STRING,
    vatteryType: DataTypes.STRING,
    batteryCapacity: DataTypes.STRING,
    removableBattery: DataTypes.STRING,
    thirthG: DataTypes.STRING,
    fourthG: DataTypes.STRING,
    simType: DataTypes.STRING,
    simnLot: DataTypes.STRING,
    wifi: DataTypes.STRING,
    GPS: DataTypes.STRING,
    bluetooth: DataTypes.STRING,
    GPRS: DataTypes.STRING,
    headphoneJack: DataTypes.STRING,
    NFC: DataTypes.STRING,
    USBConnection: DataTypes.STRING,
    otherConnection: DataTypes.STRING,
    chargingPort: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productInfo',
  });
  return productInfo;
};