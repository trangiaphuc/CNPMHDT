const db = require("../../models");
const SaleOrder = db.saleOrders;
const SaleOrderDelivery = db.saleOrderDelivery;
const SaleOrderDetail = db.saleOrderDetails;
const CurrentInstock = db.currentInstocks;
const CurrentInstockDetail = db.currentInstockDetails;
const DelStatus = db.deliveryStatuses;
const Product = db.products;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;

exports.confirmSaleOrder = (req, res) => {
    SaleOrderDelivery.findOne({
            where: { isLast: true, saleorderId: req.body.saleorderId },
        })
        .then((saleOrderDelivery) => {
            saleOrderDelivery
                .update({ isLast: false })
                .then(() => {
                    SaleOrderDelivery.create({
                            saleOrderId: req.body.saleorderId,
                            deliveryStatusId: 2,
                            isLast: true,
                        })
                        .then(() => {
                            res.status(200).send({ result: "Duyệt đơn hàng thành công!" });
                        })
                        .catch((err) => {
                            res.status(500).send({ message: err.message });
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

exports.outProduct = (req, res) => {
    CurrentInstockDetail.findOne({
        where: {
            IMEI: req.body.IMEI,
            storeId: req.body.outputStoreId,
            inventoryStatusId: req.body.inventoryStatusId,
        },
    }).then((product) => {
        if (product == null) {
            res.status(404).send({
                result: "Không có tồn IMEI tại kho " + req.body.outputStoreId,
            });
        } else {
            res.status(200).send({ result: "Nhập IMEI thành công" });
        }
    });
};

exports.shipSalesOrder = (req, res) => {
    const saleOrderDetailList = req.body.saleOrderDetailList;

    saleOrderDetailList.forEach((saleOrderDetail) => {
        CurrentInstockDetail.findOne({
            where: {
                IMEI: saleOrderDetail.IMEI,
                storeId: saleOrderDetail.outputStoreId,
                inventoryStatusId: saleOrderDetail.inventoryStatusId,
            },
        }).then((product) => {
            product
                .update({
                    isOrder: true,
                    SODetailId: saleOrderDetail.saleOrderDetailId,
                    orderId: req.body.saleOrderId,
                })
                .then(() => {
                    CurrentInstock.findOne({
                            where: {
                                productId: saleOrderDetail.productId,
                                storeId: saleOrderDetail.outputStoreId,
                                inventoryStatusId: saleOrderDetail.inventoryStatusId,
                            },
                        })
                        .then((currentInstock) => {
                            currentInstock
                                .update({ quantity: currentInstock.quantity - 1 })
                                .then(() => {
                                    //
                                    if (
                                        saleOrderDetailList.indexOf(saleOrderDetail) ==
                                        saleOrderDetailList.length - 1
                                    ) {
                                        // update SaleOrder
                                        // #region
                                        SaleOrder.findOne({ where: { id: req.body.saleOrderId } })
                                            .then((saleOrder) => {
                                                saleOrder
                                                    .update({
                                                        deliveryStaff: req.body.deliveryStaffId,
                                                        totalPaid: req.body.paidMoney + saleOrder.totalPaid,
                                                        debt: saleOrder.debt - req.body.paidMoney,
                                                    })
                                                    .then(() => {
                                                        SaleOrderDelivery.findOne({
                                                                where: {
                                                                    isLast: true,
                                                                    saleOrderId: req.body.saleOrderId,
                                                                },
                                                            })
                                                            .then((saleOrderDelivery) => {
                                                                saleOrderDelivery
                                                                    .update({
                                                                        isLast: false,
                                                                    })
                                                                    .then(() => {
                                                                        SaleOrderDelivery.create({
                                                                                saleOrderId: req.body.saleOrderId,
                                                                                deliveryStatusId: 3,
                                                                                isLast: true,
                                                                            })
                                                                            .then(() => {
                                                                                res.status(200).send({
                                                                                    result: "Cập nhật đơn hàng thành công!",
                                                                                });
                                                                            })
                                                                            .catch((err) => {
                                                                                return res
                                                                                    .status(500)
                                                                                    .send({ message: err.message });
                                                                            });
                                                                    })
                                                                    .catch((err) => {
                                                                        return res
                                                                            .status(500)
                                                                            .send({ message: err.message });
                                                                    })
                                                                    .catch((err) => {
                                                                        return res
                                                                            .status(500)
                                                                            .send({ message: err.message });
                                                                    });
                                                            })
                                                            .catch((err) => {
                                                                return res
                                                                    .status(500)
                                                                    .send({ message: err.message });
                                                            });
                                                    })
                                                    .catch((err) => {
                                                        res.status(500).send({ message: err.message });
                                                    });
                                            })
                                            .catch((err) => {
                                                res.status(500).send({ message: err.message });
                                            });
                                        // #endregion
                                    }
                                    //
                                })
                                .catch((err) => {
                                    res.status(500).send({ message: err.message });
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
    });
};

exports.shipConfirm = (req, res) => {
    SaleOrderDelivery.findOne({
            where: { isLast: true, saleorderId: req.body.saleorderId },
        })
        .then((saleOrderDelivery) => {
            saleOrderDelivery
                .update({ isLast: false })
                .then(() => {
                    SaleOrderDelivery.create({
                            saleOrderId: req.body.saleorderId,
                            deliveryStatusId: 4,
                            isLast: true,
                        })
                        .then(() => {
                            SaleOrder.findOne({ where: { id: req.body.saleorderId } })
                                .then((saleOrder) => {
                                    saleOrder
                                        .update({
                                            // deliveryStaff: req.body.deliveryStaffId,
                                            totalPaid: req.body.paidMoney + saleOrder.totalPaid,
                                            debt: saleOrder.debt - req.body.paidMoney,
                                        })
                                        .then(() => {
                                            res.status(200).send({
                                                result: "Bạn đã giao hàng thành công! Hãy đợi khách hàng xác nhận giao hàng!",
                                            });
                                        })
                                        .catch((err) => {
                                            res.status(500).send({ message: err.message });
                                        });
                                })
                                .catch((err) => {
                                    res.status(500).send({ message: err.message });
                                });
                        })
                        .catch((err) => {
                            res.status(500).send({ message: err.message });
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

exports.getAllSaleOrders = (req, res) => {
    SaleOrder.findAll({})
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
                            const delivery = saleOrderDelivery.deliveryStatus;
                            const deliveryStatusId = delivery.id;
                            const deliveryStatusName = delivery.deliveryStatusName;

                            saleOrder.setDataValue("SODeliveryStatusId", deliveryStatusId);
                            saleOrder.setDataValue(
                                "SODeliveryStatusname",
                                deliveryStatusName
                                // saleOrderDelivery
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
            res.status(500).send({ message: error.message });
        });
};