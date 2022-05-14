const { verifySignUp } = require("../../midlleware");
const controller = require("../../controllers/user.controllers/product.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/user/get-all-product-model", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getProductModel
    );

    app.post(
        "/user/get-all-product-by-model", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getProductWithModel
    );

    app.post(
        "/user/search-product-model", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.searchProductWithKeyword
    );

    app.post(
        "/user/get-product-model-with-params", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.searchSameproductWithParams
    );

    app.get(
        "/user/get-random-product", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getRandomProductWithModel
    );
};