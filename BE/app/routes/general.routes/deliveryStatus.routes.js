const { verifySignUp } = require("../../midlleware");
const controller = require("../../controllers/general.controllers/deliveryStatus.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/general/get-delivery-status-list", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getDeliveryStatus
    );
};