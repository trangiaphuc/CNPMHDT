const { verifySignUp } = require("../../midlleware");
const controller = require("../../controllers/general.controllers/place.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/general/get-province-list", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getAllProvince
    );

    app.post(
        "/general/get-district-list-by-province", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getDistrictbyProvince
    );

    app.post(
        "/general/get-ward-list-by-district", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getWardbyDistrict
    );
};