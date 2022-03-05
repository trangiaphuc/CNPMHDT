'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


//khai bao model vao index
db.brands = require('../models/brands')(sequelize, Sequelize);
db.currentInstocks = require('../models/currentInstocks')(sequelize, Sequelize);
db.deliveryStatuses = require('../models/deliveryStatuses')(sequelize, Sequelize);
db.deliveryTypes = require('../models/deliverytypes')(sequelize, Sequelize);
db.districts = require('../models/districts')(sequelize, Sequelize);
db.inputVouchers = require('../models/inputvouchers')(sequelize, Sequelize)
db.inputVoucherDetails = require('../models/inputvoucherdetails')(sequelize, Sequelize);
db.inventoryStatuses = require('../models/inventorystatuses')(sequelize, Sequelize);
db.maingroups = require('../models/maingroups')(sequelize, Sequelize);
db.payableTypes = require('../models/payabletypes')(sequelize, Sequelize);
db.products = require('../models/products')(sequelize, Sequelize);
db.provinces = require('../models/provinces')(sequelize, Sequelize);
db.quantityUnits = require('../models/quantityunits')(sequelize, Sequelize)
db.roles = require('../models/roles')(sequelize, Sequelize);
db.saleOrders = require('../models/saleorders')(sequelize, Sequelize);
db.saleOrderDetails = require('../models/saleorderdetails')(sequelize, Sequelize);
db.saleOrderDelivery = require('../models/saleorderdelivery')(sequelize, Sequelize);
db.stores = require('../models/stores')(sequelize, Sequelize);
db.subgroups = require('../models/subgroups')(sequelize, Sequelize);
db.users = require('../models/users')(sequelize, Sequelize);
db.userStatuses = require('../models/userstatuses')(sequelize, Sequelize);
db.wards = require('../models/wards')(sequelize, Sequelize);
db.userRoles = sequelize.define('userRoles');
//ket bang
db.provinces.hasOne(db.users);
db.districts.hasOne(db.users);
db.wards.hasOne(db.users);
db.userStatuses.hasOne(db.users);
db.users.belongsToMany(db.roles, {through: db.userRoles});
db.roles.belongsToMany(db.users, {through: db.userRoles});
db.maingroups.hasMany(db.subgroups);
db.products.belongsTo(db.maingroups);
db.products.belongsTo(db.subgroups);
db.products.belongsTo(db.brands);
db.products.belongsTo(db.quantityUnits);
db.stores.belongsTo(db.provinces);
db.stores.belongsTo(db.districts);
db.stores.belongsTo(db.wards);
db.currentInstocks.belongsTo(db.stores);
db.currentInstocks.belongsTo(db.products);
db.currentInstocks.belongsTo(db.inventoryStatuses);
db.currentInstocks.belongsTo(db.brands);
db.inputVoucherDetails.belongsTo(db.products);
db.currentInstockDetails.belongsTo(db.inventoryStatuses);
db.currentInstockDetails.belongsTo(db.stores);
db.currentInstockDetails.belongsTo(db.inputVoucherDetails);
db.inputVouchers.belongsTo(db.payableTypes);
db.inputVouchers.belongsTo(db.stores);
db.inputVouchers.hasMany(db.inputVoucherDetails);
db.inputVoucherDetails.belongsTo(db.products);
db.inputVoucherDetails.belongsTo(db.inventoryStatuses);
db.saleOrderDelivery.belongsTo(db.saleOrders);
db.saleOrderDelivery.belongsTo(db.deliveryStatuses);
db.saleOrders.belongsTo(db.users);
db.saleOrders.belongsTo(db.provinces);
db.saleOrders.belongsTo(db.districts);
db.saleOrders.belongsTo(db.wards);
db.saleOrders.belongsTo(db.payableTypes);
db.saleOrders.hasMany(db.saleOrderDetails);




module.exports = db;