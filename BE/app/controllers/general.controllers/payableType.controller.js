const db = require("../../models");
const PayableType = db.payableTypes;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

exports.getAllPayableType = (req, res) => {
    PayableType.findAll({ where: { isDelete: false } })
        .then((foundPayableTypes) => {
            res.status(200).send({ result: foundPayableTypes });
        })
        .catch((err) => {
            res.status(500).send({ result: err.message });
        });
};