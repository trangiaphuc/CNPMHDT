const { verifySignUp } = require("../../midlleware");
const controller = require("../../controllers/general.controllers/saleorder.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/general/get-saleorder", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getSalesOrderByUserId
    );

    app.post(
        "/general/edit-saleorder", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.editSaleOrder
    );

    app.post(
        "/general/add-new-saleorder", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.addNewSaleOrder
    );
};