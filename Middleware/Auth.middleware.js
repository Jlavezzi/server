const passport = require("passport"),
      passportJWT = require("passport-jwt"),
      User = require("../models/user.model"),
      cfg = require("../config/jwt.config"),
      ExtractJwt = passportJWT.ExtractJwt,
      Strategy = passportJWT.Strategy,
      params = {
        secretOrKey:cfg.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt")
      };
//verify user
      module.exports = ()=>{
        const strategy = new Strategy(params, (payload, done)=>{
          var user = User.findById(payload.data,(err,user)=>{
            if (err) {
              return done( new Error("UserNotFound"), null);

            }else if (payload.exp<=Date.now()) {
              return done(new Error("TokenExpired"), null)
            }else{
              return done(null, user);
            }
          });
        });
       passport.use(strategy);
        return {
          initialize: ()=>{
            return passport.initialize();
          },
          authenticate: ()=>{
            return passport.authenticate("jwt", cfg.jwtSession);
         }
        };
      };