const db = require("../models/index")
const Role= db.role
const passport = require("passport");

// const express = require('express')
      // app = express();
const connect = () => {
  return db.mongoose
    .connect("mongodb://localhost:27017/employeesDB", {
      useNewUrlParser: true,
    })
    .then(() => {
      
      // app.use(passport.initialize()); 
      console.log("DB connected");
      initial();
    })
    .catch((err) => {
      console.error(err);
      console.error("DB did not connect");
       process.exit()
    });

  
};

function initial(){
     Role.estimatedDocumentCount((err, count)=>{
      if (!err && count === 0) {
        new Role({
          name:"user"
        }).save(err=>{
          if(err) {
            console.log("error", err)
          }

          console.log("added 'user' to roles collection")
        });
//moderator role
        new Role({
          name:"moderator"
        }).save(err=>{
          if(err) {
            console.log("error", err)
          }

          console.log("added 'moderator' to roles collection")
        });
        
        //admin role
        new Role({
          name:"admin"
        }).save(err=>{
          if(err) {
            console.log("error", err)
          }

          console.log("added 'admin' to roles collection")
        });
        
      }
     })
}
module.exports = connect;
