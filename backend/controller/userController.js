const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await User.findOne({ email: email });
        if (existUser) {
            res.status(400).json('user already registerd, please login');
        }
        const user = await User.create({
            name, email, password
        });
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
    }
}


exports.login = async(req, res)=>{
    const{email, password} = req.body;
    const user = await User.findOne({email:email}).select('+password');
    if(!user){
        res.status(400).json('email not registerd, pleae register first');
    }
    isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        res.status(400).json('wrong password');
    }
    const token = user.getToken();
    res.cookie('token', token);
    res.status(200).json({user,token});
}


exports.editUser=async(req, res)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(!user){
        res.status(400).json('user not found');
    }
    res.status(200).json(user);
}

exports.deleteUser=async(req, res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
        res.status(400).json('user not found')
    }
    res.status(200).json('user delete successfully')
}

exports.logout=(req, res)=>{
    res.cookie('token', null,{
        expires:new Date(Date.now()),
        httpOnly:true
    });
    res.status(200).json('logout successfully')
}