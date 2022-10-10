const controller = require("../controllers/Register.controller");
const express = require("express");
const router = express.Router(); 

router.route("/register")
   .post(controller.register);



module.exports = router;
