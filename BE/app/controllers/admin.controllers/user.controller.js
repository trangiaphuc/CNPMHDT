const db = require('../../models');
const User = db.users;
const Role = db.roles;
const UserRole = db.userRoles;
const config = require('../../config/auth.config');
const Op = db.Sequelize.Op;

exports.findAllUsers = (req, res) =>{

    User.findAll(
    )
    .then(users =>{
        res.status(200).send({"data": users, "message": "Success"});
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
}

