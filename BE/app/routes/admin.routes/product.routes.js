const authJwt = require("../../midlleware/authJwt");
const controller = require("../../controllers/admin.controllers/product.controller");
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

    app.get("/admin/product-management/", function(req, res, next) {
        res.send("Welcome to Product API");
    });

    //Them moi san pham
    app.post(
        "/admin/product-management/add-new-product",
        upload.single("file"), [authJwt.verifyToken, authJwt.isAdmin],
        controller.addNewProduct
    );

    //lấy thông tin chi tiết sản phẩm bằng mã sản phẩm
    app.get(
        "/admin/product-management/get-product/:productId", [authJwt.verifyToken, authJwt.isAdmin],
        controller.getOneProduct
    );

    //tìm kiếm fulltext sản phẩm
    app.post(
        "/admin/product-management/search-product/", [authJwt.verifyToken, authJwt.isAdmin],
        controller.searchProductWithKeyword
    );

    // tìm sản phẩm với các hãng sản xuất sản phẩm hoặc giá bán sản phẩm tối thiếu
    app.post(
        "/admin/product-management/get-product-with-parameter", [authJwt.verifyToken, authJwt.isAdmin],
        controller.getProductWithParameters
    );
};