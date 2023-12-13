const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.auth=async(req, res, next)=>{
    const{token} = req.cookies;
    if(!token){
        res.status(400).json('please login to access');
    }
    const user = jwt.verify(token, process.env.SECRET_KEY);
    
    req.user = await User.findById(user.id);
    next();
}

exports.authRoles=async (req, res, next) => {
    try {
        if (req.user.role==='admin') {
            next()
        }else{
            res.status(400).json(`${req.user.role} is not allowed to access this resource`)
        }
    } catch (error) {
        console.log(error);
    }
}