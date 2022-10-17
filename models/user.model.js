const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
      username: String,
      pwd: String,
  roles: [
     {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Role"
     }
  ],
  attributes: [{
        type: Object,
        required: false
       }]
     });




userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

module.exports =  User ;
