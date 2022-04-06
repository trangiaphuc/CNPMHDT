const express = require('express');
const cors = require('cors');
const app = express();
const db = require("./models");
// const logger = require('./app/winston/winston')

var corsOptions = {
  origin: "http://localhost:19006"
};

global.__basedir = __dirname;

//use cors middleware
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//sequelize
db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
db.sequelize.sync({
  force: true 
}).then(() => {
  console.log("Dropped and Resync database");
});

//routes
require('./routes/general.routes/auth.routes')(app);
require('./routes/admin.routes/user.routes')(app);
require('./routes/admin.routes/product.routes')(app);

module.exports = app;
