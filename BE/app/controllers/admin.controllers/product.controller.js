const db = require("../../models");
const Product = db.products;
const Images = db.images;
const Model = db.models;
const ProductColor = db.productColors;
const Accessories = db.accessories;
const AccessoryGroup = db.accessoriesGroups;
const MainGroup = db.mainGroups;
const Subgroup = db.subgroups;
const Brand = db.brands;
const QuantityUnit = db.quantityUnits;
const Image = db.images;
const fs = require("fs");
const { Sequelize, Op } = require("sequelize");
const { resolveNs } = require("dns/promises");
const { resolveSoa } = require("dns");
const { isBuffer } = require("util");

exports.addNewProduct = (req, res) => {
    try {
        isModel = req.body.isModel;

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        const productImages = fs.readFileSync(
            __basedir + "/resources/upload/" + req.file.filename
        );

        Images.create({
                imageUri: "/resources/images/productImages/" + req.file.filename,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then((createdImage) => {
                if (createdImage) {
                    fs.writeFileSync(
                        __basedir + "/resources/images/productImages/" + req.file.filename,
                        productImages
                    );

                    Product.create({
                            productName: req.body.productName,
                            salePrice: req.body.salePrice,
                            isRequestIMEI: req.body.isRequestIMEI,
                            VAT: req.body.VAT,
                            deliveryVehicle: req.body.deliveryVehicle,
                            isInputIMEI: req.body.isInputIMEI,
                            isGiftVoucher: req.body.isGiftVoucher,
                            isCanReturnOutput: req.body.isCanReturnOutput,
                            maingroupId: req.body.maingroupId,
                            subgroupId: req.body.subgroupId,
                            brandId: req.body.brandId,
                            quantityUnitId: req.body.quantityUnitId,
                            imageId: createdImage.id,
                            modelId: (isModel = true ? null : req.body.modelId),
                            productColorId: (issModel = true ? null : req.body.productColorId),
                        })
                        .then((createdroduct) => {
                            if (createdroduct) {
                                if (isModel == true) {
                                    Model.create({
                                        modelName: req.body.modelName,
                                        modelProductId: createdProduct.id,
                                    }).then((createdModel) => {
                                        if (createdModel != null) {
                                            res.status(201).send({
                                                message: "Tạo mới sản phẩm thành công, mã sản phẩm: " +
                                                    createdroduct.id,
                                                createdProduct: createdroduct,
                                            });
                                        }
                                    });
                                } else {
                                    res.status(201).send({
                                        message: "Tạo mới sản phẩm thành công, mã sản phẩm: " +
                                            createdroduct.id,
                                        createdProduct: createdroduct,
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            res.status(500).send({ message: err.message });
                        });
                }
            })
            .catch((err) => {
                res.status(500).send({ message: err.message });
            });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.getOneProduct = (req, res) => {
    Product.findOne({
            where: {
                id: req.params.productId,
                modelId: {
                    [Op.is]: null,
                },
            },
        })
        .then((product) => {
            if (product) {
                Images.findOne({
                        where: { id: product.imageId },
                    })
                    .then((productImage) => {
                        if (productImage) {
                            const image = fs.readFileSync(__basedir + productImage.imageUri);

                            var base64ProductImage =
                                "data:image/png;base64," +
                                Buffer.from(image).toString("base64");
                            product.setDataValue("productImage", base64ProductImage);
                            res.status(200).send({
                                product: product,
                            });
                        }
                    })
                    .catch((err) => {
                        res.status(500).send({ message: err.message });
                    });
                // res.status(200).send({product: product})
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.searchProductWithKeyword = (req, res) => {
    Product.findAll({
            where: [{
                    modelId: {
                        [Op.is]: null,
                    },
                },
                Sequelize.literal("MATCH (productName) AGAINST (:keyword)"),
            ],
            replacements: {
                keyword: req.body.keyword,
            },
        })
        .then((productList) => {
            productList.forEach((product) => {
                Images.findOne({
                        where: { id: product.imageId },
                    })
                    .then((productImage) => {
                        if (productImage) {
                            const image = fs.readFileSync(__basedir + productImage.imageUri);

                            var base64ProductImage =
                                "data:image/png;base64," +
                                Buffer.from(image).toString("base64");
                            product.setDataValue("productImage", base64ProductImage);
                            if (productList.indexOf(product) == productList.length - 1) {
                                res.status(200).send({ result: productList });
                            }
                        }
                    })
                    .catch((err) => {
                        res.status(500).send({ message: err.message });
                    });
            });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.getProductWithParameters = (req, res) => {
    let iBrandId = req.body.brandId;
    let minPrice = req.body.minPrice;

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
                    },
                ],
            },
        })
        .then((productList) => {
            productList.forEach((product) => {
                Images.findOne({
                        where: { id: product.imageId },
                    })
                    .then((productImage) => {
                        if (productImage) {
                            const image = fs.readFileSync(__basedir + productImage.imageUri);
                            var base64ProductImage =
                                "data:image/png;base64," +
                                Buffer.from(image).toString("base64");
                            product.setDataValue("productImage", base64ProductImage);
                            if (productList.indexOf(product) == productList.length - 1) {
                                res.status(200).send({ result: productList });
                            }
                        }
                    })
                    .catch((err) => {
                        res.status(500).send({ message: err.message });
                    });
            });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.searchProductWithKeyword = (req, res) => {
    let productId = req.body.productId;

    Model.findOne({
            where: {
                productModelId: productId,
            },
        })
        .then((foundModel) => {
            Product.findAll({
                    where: { modelId: foundModel.id },
                    include: [
                        { model: MainGroup },
                        { model: Subgroup },
                        { model: Brand },
                        { model: QuantityUnit },
                        { model: ProductColor },
                        { model: Image },
                    ],
                })
                .then((productList) => {
                    var lstProductColor = [];
                    productList.forEach((product) => {
                        //lấy danh sách màu của model
                        const productColor = product.colors;
                        lstProductColor.push(productColor);

                        const productImage = product.images;
                        const image = fs.readFileSync(__basedir + productImage.imageUri);
                        var base64ProductImage =
                            "data:image/png;base64," + Buffer.from(image).toString("base64");
                        product.setDataValue("productImage", base64ProductImage);
                        if (productList.indexOf(product) == productList.length - 1) {
                            res.status(200).send({
                                productList: productList,
                                productColorList: lstProductColor,
                            });
                        }
                    });
                })
                .catch((err) => {
                    res.status(500).send({ message: err.message });
                });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.testAPI = (req, res) => {
    res.send({ message: "Hello" });
};