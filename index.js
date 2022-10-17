

require("dotenv").config();
const express = require("express"),
     PORT = process.env.PORT||3500,
     app = express(),
    //  authRoute = require("./routes/api/Auth.route"),
    Route = require("./routes/route"),
    Cors = require("cors")
    //  postRoute = require("./")
    auth = require("./Middleware/Auth.middleware")(),
    mongoose = require('mongoose')
     bodyParser = require("body-parser"),
     connect = require("./utils/DBconnect"),
     passport = require('passport'),
     localStrategy = require("passport-local"),
     User = require("./models/user.model")
    //  errorHandler = require("./Middleware/errorHandler");


    app.use(Cors)
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(auth.initialize());

//passsport config
passport.use(new localStrategy(User.authenticate()));
app.use(passport.initialize());
// app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(Route);
// app.use(postRoute);


//error handler ('still working on this')
// app.use( errorHandler , require('./Middleware/errorHandler'));





app.listen(PORT, () => {
  console.log(`connected to ${PORT}`);
  connect();
});
