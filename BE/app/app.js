const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");
// const logger = require('./app/winston/winston')

var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

global.__basedir = __dirname;

//use cors middleware
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//sequelize
db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
db.sequelize
    .sync({
        force: true,
    })
    .then(() => {
        console.log("Dropped and Resync database");
    });

//routes
require("./routes/general.routes/auth.routes")(app);
require("./routes/admin.routes/user.routes")(app);
require("./routes/admin.routes/product.routes")(app);
require("./routes/general.routes/mainGroup.routes")(app);
require("./routes/user.routes/product.routes")(app);
require("./routes/general.routes/brand.routes")(app);
require("./routes/general.routes/place.routes")(app);
require("./routes/admin.routes/saleOrder.routes")(app);
require("./routes/general.routes/deliveryStatus.routes")(app);
require("./routes/general.routes/deliveryType.routes")(app);
require("./routes/general.routes/mainGroup.routes")(app);
require("./routes/general.routes/payableType.routes")(app);
require("./routes/general.routes/store.routes")(app);
require("./routes/general.routes/saleOrder.routes")(app);
require("./routes/user.routes/cart.routes")(app);

module.exports = app;