

const authenticate = require('../Middleware/Auth.middleware');

exports.login = async (req,res,next)=>{
    try {
      //create a token 
       const token = authenticate.getToken({_id:req.user._id});
       
       //response
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json')
       res.json({success:true, token: token , status:"you are succesfully logged in"})
    } catch (error) {
        console.log(error);  
    }
}