const { verifySignUp } = require("../../midlleware");
const controller = require("../../controllers/general.controllers/payableType.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/general/get-payable-type-list", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getAllPayableType
    );
};