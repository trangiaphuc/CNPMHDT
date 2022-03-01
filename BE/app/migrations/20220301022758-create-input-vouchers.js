'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inputVouchers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoiceId: {
        type: Sequelize.INTEGER
      },
      invoiceDate: {
        type: Sequelize.DATEONLY
      },
      VAT: {
        type: Sequelize.FLOAT
      },
      totalAmount: {
        type: Sequelize.FLOAT
      },
      staffUserId: {
        type: Sequelize.INTEGER
      },
      customerName: {
        type: Sequelize.STRING
      },
      customerAddress: {
        type: Sequelize.STRING
      },
      customerPhone: {
        type: Sequelize.STRING
      },
      taxId: {
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
    await queryInterface.dropTable('inputVouchers');
  }
};