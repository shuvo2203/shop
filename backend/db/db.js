const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/user').then(()=>{
    console.log('database connected');
}).catch((error)=>{
    console.log('databse not conncted');
})