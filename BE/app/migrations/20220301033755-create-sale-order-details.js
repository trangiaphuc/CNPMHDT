'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('saleOrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      salePrice: {
        type: Sequelize.FLOAT
      },
      VAT: {
        type: Sequelize.FLOAT
      },
      note: {
        type: Sequelize.STRING
      },
      promotionId: {
        type: Sequelize.INTEGER
      },
      discountCode: {
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
    await queryInterface.dropTable('saleOrderDetails');
  }
};