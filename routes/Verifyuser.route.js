const authenticate = require('../Middleware/Auth.middleware'),
 controller = require('../controllers/Verifyuser.controller'),
     express = require('express'),
     router = express.Router();

     router.get('/', authenticate.verifyUser, controller.verifyUser);

     module.exports = router;