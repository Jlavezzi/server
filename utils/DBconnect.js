const db = require("../models/index")
const Role= db.role
const passport = require("passport");


const connect = () => {
  return db.mongoose
    .connect("mongodb://localhost:27017/employeesDB", {
      useNewUrlParser: true,
    })
    .then(() => {      
      console.log("DB connected");
    })
    .catch((err) => {
      console.error(err);
      console.error("DB did not connect");
       process.exit()
    });

  
};

module.exports = connect;
