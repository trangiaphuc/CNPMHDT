const { verifySignUp } = require("../../midlleware");
const controller = require("../../controllers/admin.controllers/user.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //Test Admin Routes
    app.get("/admin/", function(req, res, next) {
        res.send("Welcome to Administrator API");
    });

    //Đăng ký
    app.get(
        "/admin/users/get-all-users", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.findAllUsers
    );

    app.get(
        "/admin/users/get-all-shippers", [
            // verifySignUp.checkDuplicateUsernameOrEmail,
            // verifySignUp.checkRolesExisted
        ],
        controller.getAllShipper
    );
};