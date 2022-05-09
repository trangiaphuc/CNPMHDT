'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      operatingSystem: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      screenType: {
        type: Sequelize.STRING
      },
      screenColor: {
        type: Sequelize.STRING
      },
      standerScreen: {
        type: Sequelize.STRING
      },
      resolution: {
        type: Sequelize.STRING
      },
      wideScreen: {
        type: Sequelize.STRING
      },
      touchTechnology: {
        type: Sequelize.STRING
      },
      rearCamera: {
        type: Sequelize.STRING
      },
      frontCamera: {
        type: Sequelize.STRING
      },
      flashLight: {
        type: Sequelize.STRING
      },
      cameraFeatures: {
        type: Sequelize.STRING
      },
      film: {
        type: Sequelize.STRING
      },
      videoCalls: {
        type: Sequelize.STRING
      },
      CPUSpeed: {
        type: Sequelize.STRING
      },
      multiplier: {
        type: Sequelize.STRING
      },
      chipset: {
        type: Sequelize.STRING
      },
      RAM: {
        type: Sequelize.STRING
      },
      GPU: {
        type: Sequelize.STRING
      },
      phonebook: {
        type: Sequelize.STRING
      },
      ROM: {
        type: Sequelize.STRING
      },
      externalMemoryCard: {
        type: Sequelize.STRING
      },
      maximumcardSupport: {
        type: Sequelize.STRING
      },
      design: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      vatteryType: {
        type: Sequelize.STRING
      },
      batteryCapacity: {
        type: Sequelize.STRING
      },
      removableBattery: {
        type: Sequelize.STRING
      },
      thirthG: {
        type: Sequelize.STRING
      },
      fourthG: {
        type: Sequelize.STRING
      },
      simType: {
        type: Sequelize.STRING
      },
      simnLot: {
        type: Sequelize.STRING
      },
      wifi: {
        type: Sequelize.STRING
      },
      GPS: {
        type: Sequelize.STRING
      },
      bluetooth: {
        type: Sequelize.STRING
      },
      GPRS: {
        type: Sequelize.STRING
      },
      headphoneJack: {
        type: Sequelize.STRING
      },
      NFC: {
        type: Sequelize.STRING
      },
      USBConnection: {
        type: Sequelize.STRING
      },
      otherConnection: {
        type: Sequelize.STRING
      },
      chargingPort: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productInfos');
  }
};