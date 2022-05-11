const { verifySignUp } = require("../../midlleware");
const controller = require("../../controllers/admin.controllers/saleOrder.controller");
const express = require("express");
const upload = require("../../midlleware/upload");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.use(express.static("../../resources/images/productImages"));

    //Them moi san pham
    app.post("/admin/sale-order-managent/confirm", controller.confirmSaleOrder);

    app.post(
        "/admin/sale-order-management/ship-sale-order",
        controller.shipSalesOrder
    );

    app.post("/admin/sale-order-management/ship-confirm", controller.shipConfirm);
};