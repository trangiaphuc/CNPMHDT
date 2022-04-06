const { verifySignUp } = require("../../midlleware");
const controller = require("../../controllers/general.controllers/auth.controller");
const express = require('express');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

app.use(express.static('../../resources/images/userprofifes'));


app.get("/general/auth",function(req, res, next) {
    res.send('Welcome to Auth API');})

//Đăng ký
app.post(
    "/general/auth/signup",
    [
      // verifySignUp.checkDuplicateUsernameOrEmail,
      // verifySignUp.checkRolesExisted
    ],
    controller.signup
  );
  
  //Đăng nhập
app.post("/general/auth/signin", controller.signin);
};