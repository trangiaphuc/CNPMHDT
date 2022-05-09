const db = require("../../models");
const Subgroup = db.subgroups;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

//Đăng ký user mới
exports.getALlSubgroup = (req, res) => {
    Subgroup.findAll({ where: { isDelete: false } })
        .then((subgroupList) => {
            res.status(200).send({ result: subgroupList });
        })
        .catch((err) => {
            res.status(500).send({ result: err.message });
        });
};