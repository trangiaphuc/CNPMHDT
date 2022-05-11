const db = require("../../models");
const DeliveryStatus = db.deliveryStatuses;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

exports.getDeliveryStatus = (req, res) => {
    DeliveryStatus.findAll({ where: { isDelete: false } })
        .then((foundDeliveryStatusList) => {
            res.status(200).send({ result: foundDeliveryStatusList });
        })
        .catch((err) => {
            res.status(500).send({ result: err.message });
        });
};