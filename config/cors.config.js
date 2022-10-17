
const Cors = require('cors')
const allowlist = [
    "http://localhost:3000",
    "http://localhost:3500",
    "Thunder Client (https://www.thunderclient.com) "
  ];
  
  const corsOptionDelegate = (req, callback) => {
    var corsOptions;
    if (allowlist.indexOf(req.header("Origin")) !== -1) {
      corsOptions = { origin: true };
      //reflect (enable the requested origin in the CORS response
    } else {
      corsOptions = { origin: false };
      //disable CORS for the the request
    }
     callback(null, corsOptions);
  };

  module.exports = corsOptionDelegate;