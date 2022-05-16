const db = require("../../models");
const SaleOrder = db.saleOrders;
const SaleOrderDelivery = db.saleOrderDelivery;
const SaleOrderDetail = db.saleOrderDetails;
const DelStatus = db.deliveryStatuses;
const Province = db.provinces;
const District = db.districts;
const Ward = db.wards;
const PayableType = db.payableTypes;
const DeliveryType = db.deliveryTypes;
const Product = db.products;
const Image = db.images;
const ProductColor = db.productColors;
const QuantityUnit = db.quantityUnits;
const CartDetail = db.cartDetails;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

exports.addNewSaleOrder = (req, res) => {
    SaleOrder.create({
            userId: req.body.userId,
            provinceId: req.body.provinceId,
            districtId: req.body.districtId,
            wardId: req.body.wardId,
            deliveryAddress: req.body.deliveryAddress,
            payableTypeId: req.body.payableTypeId,
            deliveryTypeId: req.body.deliveryTypeId,
            note: req.body.note,
            debt: req.body.debt, //so tien phai tra tren san pham mua, chua tinh ship
            shippingCost: req.body.shippingCost,
            totalMoney: req.body.totalMoney, //tong tien don, da tinh ship
            outputStoreId: req.body.outputStoreId,
            isDelete: false,
        })
        .then((saleOrder) => {
            if (saleOrder) {
                const saleOrderDetailList = req.body.saleOrderDetailList;
                saleOrderDetailList.forEach((saleOrderDetail) => {
                    SaleOrderDetail.create({
                            saleOrderId: saleOrder.id,
                            productId: saleOrderDetail.productId,
                            salePrice: saleOrderDetail.salePrice,
                            VAT: saleOrderDetail.VAT,
                            salePriceInvoiceVAT: saleOrderDetail.salePriceInvoiceVAT,
                            quantity: req.body.quantity,
                        })
                        .then(() => {
                            SaleOrderDelivery.create({
                                    saleOrderId: saleOrder.id,
                                    deliveryStatusId: 1,
                                    isLast: true,
                                })
                                .then(() => {
                                    CartDetail.findOne({
                                            where: {
                                                id: saleOrderDetail.cartDetailId,
                                                // userId: req.body.userId,
                                            },
                                        })
                                        .then((cartDetails) => {
                                            cartDetails.update({ isBuy: true }).then(() => {
                                                if (
                                                    saleOrderDetailList.indexOf(saleOrderDetail) ==
                                                    saleOrderDetailList.length - 1
                                                ) {
                                                    res.status(200).send({ result: "Success" });
                                                }
                                            });
                                        })
                                        .catch((error) => {
                                            res.status(500).send({ message: error.message });
                                        });
                                })
                                .catch((err) => {
                                    res.status(500).send({ message: err.message });
                                });
                        })
                        .catch((err) => {
                            res.status(500).send({ message: err.message });
                        });
                });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

exports.getSalesOrderListByUserId = (req, res) => {
    SaleOrder.findAll({ where: { userId: req.body.userId } })
        .then((saleOrderList) => {
            if (saleOrderList.length) {
                saleOrderList.forEach((saleOrder) => {
                    SaleOrderDelivery.findOne({
                            where: {
                                saleOrderId: saleOrder.id,
                                isLast: true,
                            },
                            include: [{ model: DelStatus }],
                        })
                        .then((saleOrderDelivery) => {
                            const deliveryStatus = saleOrderDelivery.deliveryStatus;
                            const deliveryStatusId = deliveryStatus.id;
                            const deliveryStatusName = deliveryStatus.deliveryStatusName;

                            saleOrder.setDataValue("SODeliveryStatusId", deliveryStatusId);
                            saleOrder.setDataValue(
                                "SODeliveryStatusname",
                                deliveryStatusName
                            );

                            if (
                                saleOrderList.indexOf(saleOrder) ==
                                saleOrderList.length - 1
                            ) {
                                res.status(200).send({ result: saleOrderList });
                            }
                        })
                        .catch((err) => {
                            res.status(500).send({ message: err.message });
                        });
                });
            } else {
                res.status(200).send({ result: saleOrderList });
            }
        })
        .catch((error) => {
            res.status(500).send({ message: err.message });
        });
};

exports.getSalesOrderDetailByUserId = (req, res) => {
    SaleOrder.findOne({
        where: { id: req.body.saleOrderId },
        include: [
            { model: Province },
            { model: District },
            { model: Ward },
            { model: PayableType },
            { model: DeliveryType },
        ],
    }).then((saleOrder) => {
        const province = saleOrder.province;
        const provinceName = province.provinceName;

        const district = saleOrder.district;
        const districtName = district.districtName;

        const ward = saleOrder.ward;
        const wardName = ward.wardName;

        const fullDeliveryAddress =
            saleOrder.deliveryAddress +
            ", " +
            wardName +
            ", " +
            districtName +
            ", " +
            provinceName;

        const payableType = saleOrder.payableType;
        const payableTypeName = payableType.payableTypeName;

        const deliveryType = saleOrder.deliveryType;
        const deliveryTypeName = deliveryType.deliveryType;

        saleOrder.setDataValue("fullDeliveryAddress", fullDeliveryAddress);
        saleOrder.setDataValue("payableTypeName", payableTypeName);
        saleOrder.setDataValue("deliveryTypeName", deliveryTypeName);

        SaleOrderDelivery.findOne({
            where: {
                saleOrderId: saleOrder.id,
                isLast: true,
            },
            include: [{ model: DelStatus }],
        }).then((saleOrderDelivery) => {
            const deliveryStatus = saleOrderDelivery.deliveryStatus;
            const deliveryStatusId = deliveryStatus.id;
            const deliveryStatusName = deliveryStatus.deliveryStatusName;

            saleOrder.setDataValue("SODeliveryStatusId", deliveryStatusId);
            saleOrder.setDataValue("SODeliveryStatusname", deliveryStatusName);

            SaleOrderDetail.findAll({
                where: { saleOrderId: saleOrder.id },
                include: [{
                    model: Product,
                    include: [
                        { model: Image },
                        { model: ProductColor },
                        { model: QuantityUnit },
                    ],
                }, ],
            }).then((SODetailList) => {
                if (SODetailList) {
                    SODetailList.forEach((SODetail) => {
                        const product = SODetail.product;
                        const productColor = product.productColor;
                        const quantityUnit = product.quantityUnit;
                        const image = product.image;

                        const productColorName = productColor.productColorName;
                        const productQuantityUnitName = quantityUnit.quantityUnitName;
                        const productImage = fs.readFileSync(__basedir + image.imageUri);
                        const base64ProductImage =
                            "data:image/png;base64," +
                            Buffer.from(productImage).toString("base64");

                        product.setDataValue("productColorname", productColorName);
                        product.setDataValue(
                            "productQuantityUnitName",
                            productQuantityUnitName
                        );
                        product.setDataValue("productImage", base64ProductImage);

                        if (SODetailList.indexOf(SODetail) == SODetailList.length - 1) {
                            saleOrder.setDataValue("saleOrderDetailList", SODetailList);
                            res.status(200).send({ result: saleOrder });
                        }
                    });
                }
            });
        });
    });
};

exports.editSaleOrder = (req, res) => {
    const deleteRequest = req.body.deleteRequest;
    const receiveConfirm = req.body.receiveConfirm;
    SaleOrderDelivery.findOne({
        where: {
            saleOrderId: req.body.saleOrderId,
            isLast: true,
        },
    }).then((saleOrderDelivery) => {
        if (deleteRequest == true) {
            if (saleOrderDelivery.delivertStatusId == 3) {
                res
                    .status(200)
                    .send({ result: "Đơn hàng đang được giao. Không thể hủy đơn hàng!" });
            } else {
                saleOrderDelivery
                    .update({ isLast: false })
                    .then(() => {
                        SaleOrderDelivery.create({
                                isLast: true,
                                saleOrderId: req.body.saleOrderId,
                                delivertStatusId: 6,
                            })
                            .then(() => {
                                res.status(200).send({ result: "Hủy đơn hàng thành công" });
                            })
                            .catch((err) => {
                                res.status(500).send({ result: err.message });
                            });
                    })
                    .catch((err) => {
                        res.status(500).send({ result: err.message });
                    });
            }
        } else if (receiveConfirm == true) {
            saleOrderDelivery
                .update({ isLast: false })
                .then(() => {
                    SaleOrderDelivery.create({
                            isLast: true,
                            saleOrderId: req.body.saleOrderId,
                            delivertStatusId: 5,
                        })
                        .then(() => {
                            res
                                .status(200)
                                .send({ result: "Đã xác nhận đơn hàng giao thành công" });
                        })
                        .catch((err) => {
                            res.status(500).send({ result: err.message });
                        });
                })
                .catch((err) => {
                    res.status(500).send({ result: err.message });
                });
        } else {
            SaleOrder.findOne({ where: { id: req.body.saleOrderId } }).then(
                (saleOrder) => {
                    saleOrder
                        .update({
                            provinceId: req.body.provinceId,
                            districtId: req.body.districtId,
                            wardId: req.body.wardId,
                            deliveryAddress: req.body.deliveryAddress,
                        })
                        .then(() => {
                            res
                                .status(200)
                                .send({ result: "Cập nhật địa chỉ giao hành thành công!" });
                        })
                        .catch((err) => {
                            res.status(500).send({ message: err.message });
                        })
                        .catch((err) => {
                            res.status(500).send({ message: err.message });
                        });
                }
            );
        }
    });
};