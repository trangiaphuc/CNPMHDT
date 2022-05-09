const db = require("../../models");
const Product = db.products;
const ProductContent = db.productContents;
const ProductInfo = db.productInfors;
const Model = db.models;
const ProductColor = db.productColors;
const Image = db.images;
const Brand = db.brands;
const QuantityUnit = db.quantityUnits;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

exports.getProductModel = (req, res) => {
    Model.findAll({ where: { isDelete: false } })
        .then((modelList) => {
            if (modelList.length) {
                modelList.forEach((model) => {
                    Product.findOne({
                        where: { id: model.modelProductId },
                        include: [
                            { model: Brand },
                            { model: Image },
                            { model: QuantityUnit },
                        ],
                    }).then((product) => {
                        const productImage = product.image;
                        if (productImage) {
                            const image = fs.readFileSync(__basedir + productImage.imageUri);

                            var base64ProductImage =
                                "data:image/png;base64," +
                                Buffer.from(image).toString("base64");

                            product.setDataValue("productImage", base64ProductImage);

                            model.setDataValue("productModel", product);

                            if (modelList.indexOf(model) == modelList.length - 1) {
                                res.status(200).send({ result: modelList });
                            }
                        }
                    });
                });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.getProductWithModel = (req, res) => {
    Product.findAll({
        where: { modelId: req.body.modelId },
        include: [
            { model: ProductColor },
            { model: Brand },
            { model: QuantityUnit },
            { model: Image },
        ],
    }).then((productsList) => {
        if (productsList.length) {
            const productColorList = [];
            productsList.forEach((product) => {
                const productImage = product.image;
                if (productImage) {
                    const image = fs.readFileSync(__basedir + productImage.imageUri);

                    var base64ProductImage =
                        "data:image/png;base64," + Buffer.from(image).toString("base64");
                    const productColor = product.productColor;
                    productColorList.push(productColor);

                    product.setDataValue("productImage", base64ProductImage);

                    if (productsList.indexOf(product) == productsList.length - 1) {
                        // const result = {};
                        // result.setDataValue("productList", productsList);
                        // result.setDataValue("productColorList", productColorList);

                        res
                            .status(200)
                            .send({
                                productList: productsList,
                                productColorList: productColorList,
                            });
                    }
                }
            });
        }
    });
};