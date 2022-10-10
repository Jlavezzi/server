

const User = require('../models/user.model');


exports.verifyUser = (req,res, next)=>{
    //get all records
 User.find({})
    .then((users)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        //format result as json
        res.json(users);
    }, (err)=> next(err))
      .catch((err)=> next(err))
      res.redirect('/auth/register')
     
}