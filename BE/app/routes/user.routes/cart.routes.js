const authJWT = require("../../midlleware/authJwt");
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
            authJWT.verifyToken,
        ],
        controller.addToCart
    );

    app.post(
        "/user/get-cart-by-user", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
            authJWT.verifyToken,
        ],
        controller.getCartDetails
    );

    app.post(
        "/user/edit-cart", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
            authJWT.verifyToken,
        ],
        controller.editCartDetails
    );
};