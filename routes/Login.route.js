const passport =require("passport")
const controller = require('../controllers/Login.controller')
const express = require("express");

const router = express.Router();

router.post('/login', passport.authenticate('local'),controller.login);

module.exports= router