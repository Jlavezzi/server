const User = require("../../models/user.model"),
       express = require("express"),
       passport = require('passport'),
       router= express.Router();
       authController = require("../../controllers/Auth.controller");
       
       router.post("/login" , authController.login);
       router.post("/register", authController.register)

       module.exports = router