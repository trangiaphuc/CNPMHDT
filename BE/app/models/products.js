// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class products extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   products.init({
//     productName: DataTypes.STRING,
//     isRequestIMEI: DataTypes.BOOLEAN,
//     VAT: DataTypes.FLOAT,
//     deliveryVehicle: DataTypes.INTEGER,
//     isInputIMEI: DataTypes.BOOLEAN,
//     isGiftVoucher: DataTypes.BOOLEAN,
//     isCanReturnOutput: DataTypes.BOOLEAN,
//     isDelete: DataTypes.BOOLEAN,
//     userCreate: DataTypes.INTEGER,
//     userUpdate: DataTypes.INTEGER,
//     userDelete: DataTypes.INTEGER
//   },
//   {
//     indexes: [
//         {type: 'FULLTEXT', name: 'product_index', fields: ['productName']}
//     ]
//   }
//   , {
//     sequelize,
//     modelName: 'products',
//   });
//   return products;
// };

module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define(
        "products", {
            productName: {
                type: DataTypes.STRING,
            },
            salePrice: {
                type: DataTypes.FLOAT,
            },

            isRequestIMEI: {
                type: DataTypes.BOOLEAN,
            },
            VAT: {
                type: DataTypes.FLOAT,
            },
            deliveryVehicle: {
                type: DataTypes.INTEGER,
            },
            isInputIMEI: {
                type: DataTypes.BOOLEAN,
            },
            isGiftVoucher: {
                type: DataTypes.BOOLEAN,
            },
            RAM: { type: DataTypes.STRING },
            isCanReturnOutput: {
                type: DataTypes.BOOLEAN,
            },
            isDelete: {
                type: DataTypes.BOOLEAN,
            },
            userCreate: {
                type: DataTypes.INTEGER,
            },
            userUpdate: {
                type: DataTypes.INTEGER,
            },
            userDelete: {
                type: DataTypes.INTEGER,
            },
        }, {
            indexes: [
                { type: "FULLTEXT", name: "product_index", fields: ["productName"] },
            ],
        }
    );
    return product;
};