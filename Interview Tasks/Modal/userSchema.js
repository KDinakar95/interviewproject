const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    password:{
        type:String,
        required:true,
        unique:true
    }
})

const User = mongoose.model('userinformation',userSchema);

module.exports = User;