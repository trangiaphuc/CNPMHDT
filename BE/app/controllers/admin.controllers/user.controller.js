const db = require("../../models");
const User = db.users;
const Role = db.roles;
const UserRole = db.user_roles;
const config = require("../../config/auth.config");
const Op = db.Sequelize.Op;

exports.findAllUsers = (req, res) => {
    User.findAll()
        .then((users) => {
            res.status(200).send({ data: users, message: "Success" });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
};
exports.getAllShipper = (req, res) => {
    // User.findAll().then((users) => {
    //     users.forEach((user) => {
    //         // user.getRoles().then((roles) => {
    //         //     console.log(roles.length + "phucphuc");
    //         //     if (roles.length) {
    //         //         for (let i = 0; i < roles.length; i++) {}}}
    //         const shippers = [];
    //         user.getRoles({}).then((roles) => {
    //             if (roles.length) {
    //                 for (let i = 0; i < roles.length; i++) {
    //                     if (roles[i].roleName === "shipper") {
    //                         shippers.push(user);
    //                         break;
    //                     }
    //                 }
    //                 if (users.indexOf(user) === users.length - 1) {
    //                     res.status(200).send({ result: roles });
    //                 }
    //             }
    //         });
    //     });
    // });

    Role.findOne({ where: { id: 2 } })
        .then((role) => {
            role.getUsers().then((users) => {
                res.status(200).send({ result: users });
            });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });

    // User.getRoles().then((users) => {
    //     res.status(200).send({ result: users });
    // });
};