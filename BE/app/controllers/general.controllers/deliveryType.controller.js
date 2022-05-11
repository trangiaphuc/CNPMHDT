const db = require("../../models");
const DeliveryType = db.deliveryTypes;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

exports.getDeliveryType = (req, res) => {
    DeliveryType.findAll({ where: { isDelete: false } })
        .then((foundDeliveryTypeList) => {
            res.status(200).send({ result: foundDeliveryTypeList });
        })
        .catch((err) => {
            res.status(500).send({ result: err.message });
        });
};