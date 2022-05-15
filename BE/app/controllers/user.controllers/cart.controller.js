const db = require("../../models");
const Product = db.products;
const Cart = db.carts;
const CartDetail = db.cartDetails;
const QuantityUnit = db.quantityUnits;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

exports.getCartDetails = (req, res) => {
    Cart.findOne({
        where: { userId: req.body.userId },
    }).then((foundCart) => {
        CartDetail.findAll({
            where: { cartId: foundCart.id, isBuy: false },
            include: [{ model: Product }],
        }).then((cartDetailList) => {
            foundCart.setDataValue("cartDetailList", cartDetailList);
            res.status(200).send({ result: foundCart });
        });
    });
};

exports.addToCart = (req, res) => {
    Cart.findOne({
            where: { userId: req.body.userId },
        })
        .then((foundCart) => {
            CartDetail.create({
                    cartId: foundCart.id,
                    productId: req.body.productId,
                    quantity: req.body.quantity,
                    isBuy: false,
                    isDelete: false,
                })
                .then(() => {
                    res.status(200).send({ result: "Success" });
                })
                .catch((err) => {
                    res.status(500).send({ result: err.message });
                });

            // res.status(200).send({ result: foundCart });
        })
        .catch((err) => {
            res.status(500).send({ result: err.message });
        });
};

exports.editCartDetails = (req, res) => {
    CartDetail.findOne({ where: { id: req.body.id } })
        .then((foundCartDetails) => {
            foundCartDetails
                .update({
                    quantity: req.body.quantity,
                    isDelete: req.body.isDelete,
                })
                .then(() => {
                    res.status(200).send({ result: "Success" });
                })
                .catch((error) => {
                    res.status(error).send({ result: err.message });
                });
        })
        .catch((err) => {
            res.status(500).send({ result: err.message });
        });
};