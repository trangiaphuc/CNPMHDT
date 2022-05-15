const db = require("../../models");
const Store = db.stores;
const Province = db.provinces;
const District = db.districts;
const Ward = db.wards;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

//Đăng ký user mới
exports.getAllStores = (req, res) => {
    Store.findAll({
            where: { isDelete: false },
            include: [{ model: Province }, { model: District }, { model: Ward }],
        })
        .then((foundStore) => {
            if (foundStore) {
                // const storeProvinces = foundStore.province;
                // const storeDistricts = foundStore.district;
                // const storeWards = foundStore.ward;
                // const wardNameN = storeWards.wardName;
                // // console.log({ sound: storeWards });
                // const provinceNameN = storeProvinces.provinceName;
                // const districtNameN = storeDistricts.districtName;
                // const storeAddress = wardNameN + " " + districtNameN + " " + provinceNameN;
                // foundStore.setDataValue("storeAddress", storeAddress);
                res.status(200).send({ result: foundStore });
            }
        })
        .catch((err) => {
            res.status(500).send({ result: err.message });
        });
};