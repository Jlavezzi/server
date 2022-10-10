 const  passport  = require("passport");
const  User  = require("../models/user.model");
const authenticate = require('../Middleware/Auth.middleware')
const roleChecker = require("../Middleware/rolechecker")
exports.register = async (req, res, next) => {
  
   //Create User
   User.register(new User({username: req.body.user}),req.body.pwd,req.body.roles,(err,user)=>{
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type','application/json');
      res.json({err:err});
      console.log(err);
    }else{
      //check for roles
       roleChecker()
      //use passport to authenticate User
      passport.authenticate('local')(req, res, ()=>{
        //create token
        const token = authenticate.getToken({_id:req.user._id})
        res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
      res.json({success:true, status:'Registration Sucessful' , token: token});
      // console.log(err)
      })
    }
   } )
  
};

