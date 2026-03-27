const {Schema, model} = require("mongoose");

const  userSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{

    
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: Number,
        unique: true
    }
})

module.exports = model('User', userSchema)