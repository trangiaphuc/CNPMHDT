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
const AccessoryGroup = db.accessoryGroups;
const Accessory = db.accessories;
const config = require("../../config/auth.config");
const { Sequelize, Op } = require("sequelize");
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
                        const quantityUnit = product.quantityUnit;

                        if (productImage) {
                            const image = fs.readFileSync(__basedir + productImage.imageUri);

                            var base64ProductImage =
                                "data:image/png;base64," +
                                Buffer.from(image).toString("base64");

                            product.setDataValue("productImage", base64ProductImage);

                            const brandName = brand.brandName;
                            const productQuantityUnitName = quantityUnit.quantityUnitName;

                            model.setDataValue("productModel", product);
                            model.setDataValue("productBrand", brandName);
                            model.setDataValue("productQuantity", productQuantityUnitName);

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
            productsList.forEach(async(product) => {
                const productImage = product.image;
                const brand = product.brand;
                const productColor = product.productColor;
                const quantityUnit = product.quantityUnit;
                // const currentInstocks = product.currentInstocks;
                const productId = product.id;

                const productCurrentInstocks = await CurrentInstock.findOne({
                    where: { productId: product.id, storeId: req.body.storeId },
                });

                const productInfo = await ProductInfo.findAll({
                    where: { productId: req.body.productModelId },
                });
                const productContentList = await ProductContent.findAll({
                    where: { productId: req.body.productModelId },
                });

                const productAccessoryGroup = await AccessoryGroup.findAll({
                    where: { subgroupId: product.subgroupId },
                    include: { model: Accessory },
                });

                if (productContentList.length > 0) {
                    productContentList.forEach((productContent) => {
                        const isImage = productContent.isImage;
                        if (isImage == true) {
                            const image = fs.readFileSync(__basedir + productContent.content);
                            var base64ProductImage =
                                "data:image/png;base64," +
                                Buffer.from(image).toString("base64");
                            productContent.content = base64ProductImage;
                        }
                    });
                }

                const currentInstockStore =
                    productCurrentInstocks == null ? -1 : productCurrentInstocks.storeId;
                const currentInstockQuantity =
                    productCurrentInstocks == null ? 0 : productCurrentInstocks.quantity;

                // console.log({ bePhucDeThuong: productCurrentInstocks.dataValues });

                if (productImage) {
                    const image = fs.readFileSync(__basedir + productImage.imageUri);

                    var base64ProductImage =
                        "data:image/png;base64," + Buffer.from(image).toString("base64");
                    productColor.setDataValue("productId", productId);
                    productColorList.push(productColor);
                }

                const brandName = brand.brandName;
                const quantityUnitName = quantityUnit.quantityUnitName;
                const colorName = productColor.colorName;
                const colorCode = productColor.colorCode;

                // console.log(
                //     "banPhucLog " +
                //     // currentInstockStoreId,
                //     currentInstockQuantity
                // );

                product.setDataValue("productBrand", brandName);
                product.setDataValue("productQuantity", quantityUnitName);
                product.setDataValue("productColorName", colorName);
                product.setDataValue("productColorCode", colorCode);
                product.setDataValue("productImage", base64ProductImage);
                product.setDataValue(
                    "productCurrentInstockStoreId",
                    productCurrentInstocks
                );
                product.setDataValue("productAccessoryGroup", productAccessoryGroup);
                product.setDataValue(
                    "productCurrentInstockStoreId",
                    currentInstockStore
                );
                product.setDataValue(
                    "productCurrentInstockQuantity",
                    currentInstockQuantity
                );
                product.setDataValue("productInfomation", productInfo);
                product.setDataValue("productContent", productContentList);

                if (productsList.indexOf(product) == productsList.length - 1) {
                    // const result = {};
                    // result.setDataValue("productList", productsList);
                    // result.setDataValue("productColorList", productColorList);

                    res.status(200).send({
                        productList: productsList,
                        productColorList: productColorList,
                    });
                }
            });
        }
    });
};

exports.getRandomProductWithModel = (req, res) => {
    Product.findAll({
        include: [
            // { model: ProductColor },
            { model: Brand },
            { model: QuantityUnit },
            { model: Image },
        ],
        where: { modelId: null },
        order: Sequelize.literal("rand()"),
        limit: 5,
    }).then((productsList) => {
        if (productsList.length) {
            const productColorList = [];
            productsList.forEach(async(product) => {
                const model = await Model.findOne({
                    where: { modelProductId: product.id },
                });
                // const modelId = model.id;

                const productImage = product.image;
                const brand = product.brand;
                // const productColor = product.productColor;
                const quantityUnit = product.quantityUnit;

                // console.log(model.id);

                if (productImage) {
                    const image = fs.readFileSync(__basedir + productImage.imageUri);

                    var base64ProductImage =
                        "data:image/png;base64," + Buffer.from(image).toString("base64");
                    // productColorList.push(productColor);

                    const brandName = brand.brandName;
                    const quantityUnitName = quantityUnit.quantityUnitName;
                    // const colorName = productColor.colorName;
                    // const colorCode = productColor.colorCode;

                    product.setDataValue("productBrand", brandName);
                    product.setDataValue("productQuantity", quantityUnitName);
                    // product.setDataValue("productColorName", colorName);
                    // product.setDataValue("productColorCode", colorCode);
                    product.setDataValue("productImage", base64ProductImage);
                    product.modelId = model;
                    if (productsList.indexOf(product) == productsList.length - 1) {
                        // const result = {};
                        // result.setDataValue("productList", productsList);
                        // result.setDataValue("productColorList", productColorList);

                        res.status(200).send({
                            productList: productsList,
                            // productColorList: productColorList,
                        });
                    }
                }
            });
        }
    });
};

exports.searchProductWithKeyword = (req, res) => {
    Product.findAll({
            where: [{
                    modelId: {
                        [Op.is]: null,
                    },
                    isDelete: false,
                    modelId: null,
                },
                Sequelize.literal("MATCH (productName) AGAINST (:keyword)"),
            ],
            replacements: {
                keyword: req.body.keyword,
            },
            include: [{ model: Image }],
        })
        .then((productList) => {
            if (productList.length) {
                productList.forEach((product) => {
                    Model.findOne({ where: { modelProductId: product.id } }).then(
                        (foundModel) => {
                            const productImage = product.image;
                            const productModelId = foundModel.id;
                            if (productImage) {
                                const image = fs.readFileSync(
                                    __basedir + productImage.imageUri
                                );

                                var base64ProductImage =
                                    "data:image/png;base64," +
                                    Buffer.from(image).toString("base64");
                                product.setDataValue("productImage", base64ProductImage);
                                product.setDataValue("productModelId", productModelId);
                                if (productList.indexOf(product) == productList.length - 1) {
                                    res.status(200).send({ result: productList });
                                }
                            }
                        }
                    );
                });
            } else {
                res.status(200).send({ result: productList });
            }
        })
        .catch((err) => {
            res.status(500).send({ result: err.message });
        });
};

exports.searchSameproductWithParams = (req, res) => {
    let iBrandId = req.body.brandId;
    let minPrice = req.body.minPrice;
    let iMaingroupId = req.body.maingroupId;
    Product.findAll({
            where: {
                [Op.and]: [{
                        brandId: iBrandId == -1 ?
                            {
                                [Op.gt]: 0,
                            } :
                            iBrandId,
                    },
                    {
                        maingroupId: iMaingroupId == -1 ?
                            {
                                [Op.gt]: 0,
                            } :
                            iMaingroupId,
                    },
                    {
                        salePrice: minPrice > 0 ?
                            {
                                [Op.lte]: minPrice,
                            } :
                            {
                                [Op.gt]: 0,
                            },
                    },
                    {
                        modelId: {
                            [Op.is]: null,
                        },
                        isDelete: {
                            [Op.is]: false,
                        },
                    },
                ],
            },
            include: [{
                model: Image,
            }, ],
        })
        .then((productList) => {
            if (productList.length) {
                productList.forEach((product) => {
                    const productImage = product.image;
                    if (productImage) {
                        Model.findOne({ where: { modelProductId: product.id } }).then(
                            (model) => {
                                const productModelId = model.id;
                                if (productImage) {
                                    const image = fs.readFileSync(
                                        __basedir + productImage.imageUri
                                    );
                                    var base64ProductImage =
                                        "data:image/png;base64," +
                                        Buffer.from(image).toString("base64");
                                    product.setDataValue("productImage", base64ProductImage);
                                    product.setDataValue("productModelId", productModelId);
                                    if (productList.indexOf(product) == productList.length - 1) {
                                        res.status(200).send({ result: productList });
                                    }
                                }
                            }
                        );
                    }
                });
            } else {
                res.status(200).send({ result: productList });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};