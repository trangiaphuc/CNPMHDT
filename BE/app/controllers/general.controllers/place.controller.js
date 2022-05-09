const db = require("../../models");
const Province = db.provinces;
const District = db.districts;
const Ward = db.wards;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

//Đăng ký user mới
exports.getAllProvince = (req, res) => {
    Province.findAll()
        .then((provinceList) => {
            res.status(200).send({ result: provinceList });
        })
        .catch((error) => {
            res.status(500).send({ message: err.message });
        });
};

exports.getDistrictbyProvince = (req, res) => {
    District.findAll({ where: { provinceCode: req.body.provinceCode } })
        .then((districtList) => {
            if (districtList) {
                res.status(200).send({ result: districtList });
            }
        })
        .catch((err) => {
            res.status(500).send({ result: err.message });
        });
};

exports.getWardbyDistrict = (req, res) => {
    Ward.findAll({
            where: { districtCode: req.body.districtCode },
        })
        .then((wardList) => {
            res.status(200).send({ result: wardList });
        })
        .catch((error) => {
            res.status(500).send({ message: err.message });
        });
};