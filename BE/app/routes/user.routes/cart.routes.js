const { verifySignUp } = require("../../midlleware");
const controller = require("../../controllers/user.controllers/cart.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/user/add-to-cart", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.addToCart
    );

    app.post(
        "/user/get-cart-by-user", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getCartDetails
    );

    app.post(
        "/user/edit-cart", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.editCartDetails
    );
};