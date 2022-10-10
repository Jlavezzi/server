const controller = require('../controllers/Logout.controller')
const express = require("express");

const router = express.Router();

router.get('/logout', controller.logout);

module.exports = router;