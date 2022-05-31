const db = require("../../models");
const User = db.users;
const Role = db.roles;
const Cart = db.carts;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const fs = require("fs");

//Đăng ký user mới
exports.signup = (req, res) => {
    // tạo và lưu thông tin user
    User.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 8),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            birthday: new Date(req.body.birthday),
            gender: req.body.gender,
            provinceId: req.body.provinceId,
            districtId: req.body.districtId,
            wardId: req.body.wardId,
            userStatusId: req.body.userStatusId,
        })
        .then((user) => {
            if (req.body.roles) {
                Role.findAll({
                    where: {
                        name: {
                            [Op.or]: req.body.roles,
                        },
                    },
                }).then((roles) => {
                    user.setRoles(roles).then(() => {
                        Cart.create({
                            userId: user.id,
                        }).then(() => {
                            res.send({ message: "User was registered successfully!" });
                        });
                    });
                });
            } else {
                // user role = 1
                user.setRoles([1]).then(() => {
                    Cart.create({
                        userId: user.id,
                    }).then(() => {
                        res.send({ message: "User was registered successfully!" });
                    });
                });
            }
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};

//Đăng nhập
exports.signin = (req, res) => {
    User.findOne({
            where: {
                [Op.or]: [
                    { username: req.body.username },
                    { email: req.body.email },
                    { phone: req.body.phone },
                ],
            },
        })
        .then((user) => {
            if (user == null) {
                return res.status(404).send({ message: "User Not found." });
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!",
                });
            }
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 14400, // 4 hours
            });
            var authorities = [];
            user.getRoles().then((roles) => {
                console.log(roles.length + "phucphuc");
                if (roles.length) {
                    for (let i = 0; i < roles.length; i++) {
                        authorities.push("ROLE_" + roles[i].roleName.toUpperCase());
                    }
                    res.status(200).send({
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        roles: authorities,
                        accessToken: token,
                    });
                }
            });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};