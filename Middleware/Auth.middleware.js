const passport = require('passport')
//secret key
const config = require('../config/jwt.config')

//usermodel
const User = require('../models/index').user

//strategies
const jwtStrategy  = require('passport-jwt').Strategy,
      Extractjwt = require('passport-jwt').ExtractJwt,
      LocalStrategy = require('passport-local').Strategy;

//used to create , sign and verify tokens
const jwt =  require('jsonwebtoken');

// initialize passport
// app.use(passport.initialize());
//Local strategy with passport mongoose plugin user.authrnticate function
passport.use(new LocalStrategy(User.authenticate()));

//required for support of session  in passport


// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

exports.getToken = (user)=>{
  //crreate jwt
  return jwt.sign(user, config.secretKey, {expiresIn:3600});
};

//option to specify for jwt based dtrategy
var opts = {};

//specifies how jwt should be extracted from incomming message
opts.jwtFromRequest = Extractjwt.fromAuthHeaderAsBearerToken();

//supply the secret key to be using within strategy for sign in
opts.secretOrKey = config.secretKey;

//JWT Strategy

exports.jwtPassport = passport.use(new jwtStrategy(opts,
  //The done is the callback provided by express
(jwt_payload,done)=>{

  //Search the user with jwt.payload ID field

  User.findOne({_id:jwt_payload._id}, (err, user)=>{
    //Have error 
    if (err) {
      return done (err, false);
    }
    //user exist
    else if (user) {
      return done(null, user);
    }
     //User doesn't exist
     else{
      return done(null, false);
     }
  })
}))

//verify an incoming user with jwt strategy 
exports.verifyUser = passport.authenticate('jwt', {session:false});