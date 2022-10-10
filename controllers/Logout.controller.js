const { Error } = require("mongoose");


exports.logout = (req,res,next)=>{
    if (req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
    }else{
        const err = new Error('You are not logged in ');
        err.status = 403;
        next(err)
    }
}