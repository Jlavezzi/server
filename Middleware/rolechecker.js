const db = require("../models/index")
       ROLES = db.Roles
const checkRolesExisted = (req,res,next)=>{
    if(req.body.roles) {
        for(let i= 0; i < req.body.roles; i++){
            if(!ROLES.incudes(req.body.roles[i])){
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist`
                });
                return;
            }
        }
    }
    next();
}

module.exports = checkRolesExisted;