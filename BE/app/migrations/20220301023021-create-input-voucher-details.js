'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inputVoucherDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      inputPrice: {
        type: Sequelize.FLOAT
      },
      VAT: {
        type: Sequelize.FLOAT
      },
      inputDate: {
        type: Sequelize.DATEONLY
      },
      inputUser: {
        type: Sequelize.INTEGER
      },
      deleteUser: {
        type: Sequelize.INTEGER
      },
      deleteDate: {
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('inputVoucherDetails');
  }
};