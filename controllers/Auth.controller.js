const express = require("express"),
   User = require("../models/user.model"),
   config = require("../config/jwt.config"),
   jwt = require("jsonwebtoken");


 exports.login = (req,res)=>{
    console.log("Logged In");
    User.findOne({username: req.body.user}, (err,user) =>{
        if (err) {
            console.log("ERROR happened in auth /token Route");
        } else{
            const payload = {
                data: user.id,
                exp: Math.floor(Date.now()/1000)+(60*60)
            };
          const token = jwt.sign(payload, config.jwtSecret);
        // const token = jwt.sign({exp: Math.floor(Date.now()/1000)+(60*60), data:user._id}, config.jwtSecret)
          res.json({token: token, message: "successfully logged in"})
          console.log(res.token)
        };
    });
 }  ;


 exports.register = (req, res)=>{
    User.register(
        new User({username: req.body.user}),req.body.pwd, (err, msg)=>{
            console.log("hi")
            if (err){
                res.send(err);
            }else{
                console.log('nay')
                res.redirect("/auth/login")
                //  res.json({token:token, message:"regiatered"});
            }
        }
    );
 };