
const registerRoute = require("./Register.route"),
      loginRoute = require("./Login.route"),
      logoutRoute = require("./Logout.route"),
      verifyUser = require('./Verifyuser.route'),
    CORS = require('cors'),
     corsOptionDelegate = require('../config/cors.config'),
     corsSetup = CORS(corsOptionDelegate),
     express = require("express"),
      router = express.Router();

router.use("/users",corsSetup,verifyUser )
 router.use("/auth",corsSetup, registerRoute);
 router.use("/auth" ,corsSetup, loginRoute);
router.use("/auth",corsSetup, logoutRoute);

module.exports = router;
