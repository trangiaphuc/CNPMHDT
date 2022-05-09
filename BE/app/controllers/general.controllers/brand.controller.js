const db = require("../../models");
const Brands = db.brands;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

//Đăng ký user mới
exports.getAllBrands = (req, res) => {
    Brands.findAll({
            where: { isDelete: false },
        })
        .then((foundBrands) => {
            if (foundBrands) {
                res.status(200).send({ result: foundBrands });
            }
        })
        .catch((err) => {
            res.status(500).send({ result: err.message });
        });
};