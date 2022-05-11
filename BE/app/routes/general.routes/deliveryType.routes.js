const { verifySignUp } = require("../../midlleware");
const controller = require("../../controllers/general.controllers/deliveryType.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/general/get-delivery-type-list", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getDeliveryType
    );
};