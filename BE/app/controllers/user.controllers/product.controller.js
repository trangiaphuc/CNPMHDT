const db = require("../../models");
const Product = db.products;
const ProductContent = db.productContents;
const ProductInfo = db.productInfors;
const Model = db.models;
const ProductColor = db.productColors;
const Image = db.images;
const Brand = db.brands;
const QuantityUnit = db.quantityUnits;
const CurrentInstock = db.currentInstocks;
const CurrentInstockDetail = db.currentInstockDetails;
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
                        const brand = product.brand;
                        const quantityUnit = product.quantity;

                        if (productImage) {
                            const image = fs.readFileSync(__basedir + productImage.imageUri);

                            var base64ProductImage =
                                "data:image/png;base64," +
                                Buffer.from(image).toString("base64");

                            product.setDataValue("productImage", base64ProductImage);

                            const brandName = brand.brandName;
                            const quantityUnitName = quantityUnit.quantityUnitName;

                            model.setDataValue("productModel", product);
                            model.setDataValue("productBrand", brandName);
                            model.setDataValue("productQuantity", quantityUnitName);

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
            {
                model: CurrentInstock,
                where: { storeId: req.body.storeId },
            },
        ],
    }).then((productsList) => {
        if (productsList.length) {
            const productColorList = [];
            productsList.forEach((product) => {
                const productImage = product.image;
                const brand = product.brand;
                const productColor = product.productColor;
                const quantityUnit = product.quantityUnit;
                const currentInstocks = product.currentInstocks;

                if (productImage) {
                    const image = fs.readFileSync(__basedir + productImage.imageUri);

                    var base64ProductImage =
                        "data:image/png;base64," + Buffer.from(image).toString("base64");
                    productColorList.push(productColor);

                    const brandName = brand.brandName;
                    const quantityUnitName = quantityUnit.quantityUnitName;
                    const colorName = productColor.colorName;
                    const colorCode = productColor.colorCode;
                    const currentInstockStoreId = currentInstocks.storeId;
                    const currentInstockQuantity = currentInstocks.quantity;

                    product.setDataValue("productBrand", brandName);
                    product.setDataValue("productQuantity", quantityUnitName);
                    product.setDataValue("productColorName", colorName);
                    product.setDataValue("productColorCode", colorCode);
                    product.setDataValue("productImage", base64ProductImage);
                    product.setDataValue("currentInstockStoreId", currentInstockStoreId);
                    product.setDataValue(
                        "currentInstockQuantity",
                        currentInstockQuantity
                    );

                    if (productsList.indexOf(product) == productsList.length - 1) {
                        // const result = {};
                        // result.setDataValue("productList", productsList);
                        // result.setDataValue("productColorList", productColorList);

                        res.status(200).send({
                            productList: productsList,
                            productColorList: productColorList,
                        });
                    }
                }
            });
        }
    });
};

exports.getRandomProductWithModel = (req, res) => {
    Product.findAll({
        include: [
            { model: ProductColor },
            { model: Brand },
            { model: QuantityUnit },
            { model: Image },
        ],
        order: Sequelize.literal("rand()"),
        limit: 4,
    }).then((productsList) => {
        if (productsList.length) {
            const productColorList = [];
            productsList.forEach((product) => {
                const productImage = product.image;
                const brand = product.brand;
                const productColor = product.productColor;
                const quantityUnit = product.quantityUnit;

                if (productImage) {
                    const image = fs.readFileSync(__basedir + productImage.imageUri);

                    var base64ProductImage =
                        "data:image/png;base64," + Buffer.from(image).toString("base64");
                    productColorList.push(productColor);

                    const brandName = brand.brandName;
                    const quantityUnitName = quantityUnit.quantityUnitName;
                    const colorName = productColor.colorName;
                    const colorCode = productColor.colorCode;

                    product.setDataValue("productBrand", brandName);
                    product.setDataValue("productQuantity", quantityUnitName);
                    product.setDataValue("productColorName", colorName);
                    product.setDataValue("productColorCode", colorCode);
                    product.setDataValue("productImage", base64ProductImage);

                    if (productsList.indexOf(product) == productsList.length - 1) {
                        // const result = {};
                        // result.setDataValue("productList", productsList);
                        // result.setDataValue("productColorList", productColorList);

                        res.status(200).send({
                            productList: productsList,
                            productColorList: productColorList,
                        });
                    }
                }
            });
        }
    });
};