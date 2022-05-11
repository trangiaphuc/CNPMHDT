const db = require("../../models");
const SaleOrder = db.saleOrders;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

exports.addNewSaleOrder = (req, res) => {};

exports.getSalesOrderByUserId = (req, res) => {};

exports.editSaleOrder = (req, res) => {};