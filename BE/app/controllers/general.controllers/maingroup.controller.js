const db = require("../../models");
const MainGroup = db.maingroups;
const Images = db.images;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
const fs = require("fs");

exports.getAllMainGroups = (req, res) => {
    MainGroup.findAll({
            where: { isDelete: false },
        })
        .then((mainGroupList) => {
            mainGroupList.forEach((mainGroup) => {
                if (mainGroup.maingroupIcon != null) {
                    const image = fs.readFileSync(__basedir + mainGroup.maingroupIcon);
                    var base64mainGroupImage =
                        "data:image/png;base64," + Buffer.from(image).toString("base64");
                    mainGroup.setDataValue("mainGroupImage", base64mainGroupImage);
                    if (mainGroupList.indexOf(mainGroup) == mainGroupList.length - 1) {
                        res.status(200).send({ result: mainGroupList });
                    }
                }
            });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};