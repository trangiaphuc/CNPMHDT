const db = require("../../models");
const SaleOrder = db.saleOrders;
const SaleOrderDelivery = db.saleOrderDelivery;
const CurrentInstock = db.currentInstocks;
const CurrentInstockDetail = db.currentInstocksDetails;
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
                            saleorderId: req.body.saleorderId,
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

exports.shipSalesOrder = (req, res) => {
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
            product
                .update({
                    isOrder: true,
                    SODetailId: req.body.saleOrderDetailId,
                    orderId: req.body.saleOrderId,
                })
                .then(() => {
                    CurrentInstock.findOne({
                            where: {
                                productId: req.body.productId,
                                storeId: req.body.outputStoreId,
                                inventoryStatusId: req.body.inventoryStatusId,
                            },
                        })
                        .then((currentInstock) => {
                            currentInstock
                                .update({ quantity: currentInstock.quantity - 1 })
                                .then(() => {
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
        }
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
                            saleorderId: req.body.saleorderId,
                            deliveryStatusId: 4,
                            isLast: true,
                        })
                        .then(() => {
                            SaleOrder.findOne({ where: { id: req.body.saleorderId } })
                                .then((saleOrder) => {
                                    saleOrder
                                        .update({
                                            deliveryStaff: req.body.deliveryStaffId,
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