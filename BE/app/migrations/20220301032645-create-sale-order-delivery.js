'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('saleOrderDeliveries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isLast: {
        type: Sequelize.BOOLEAN
      },
      userCreate: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('saleOrderDeliveries');
  }
};