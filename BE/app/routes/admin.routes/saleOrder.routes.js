const authJWT = require("../../midlleware/authJwt");
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
    app.post(
        "/admin/sale-order-managent/confirm", [authJWT.verifyToken, authJWT.isAdmin],
        controller.confirmSaleOrder
    );

    app.post(
        "/admin/sale-order-management/ship-sale-order", [authJWT.verifyToken, authJWT.isAdmin],
        controller.shipSalesOrder
    );

    app.get(
        "/admin/sale-order-management/get-all-sale-order", [authJWT.verifyToken, authJWT.isAdmin],
        controller.getAllSaleOrders
    );

    app.post(
        "/admin/sale-order-management/out-product", [authJWT.verifyToken, authJWT.isAdmin],
        controller.outProduct
    );

    app.post(
        "/admin/sale-order-management/ship-confirm", [authJWT.verifyToken, authJWT.isAdmin],
        controller.shipConfirm
    );
};