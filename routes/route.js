
const authRoute = require("./api/Auth.route"),
       postroute = require("./api/Post.route"),
    CORS = require('cors'),
     corsOptionDelegate = require('../config/cors.config'),
     corsSetup = CORS(corsOptionDelegate),
     express = require("express"),
      router = express.Router();



 router.use("/auth", corsSetup, authRoute)
 router.use("/", corsSetup, postroute)


module.exports = router;
