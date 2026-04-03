const {Schema, model} = require("mongoose");

const  userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
      type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        unique: true,
        sparse: true
    },
    password: {
        type: String,
        unique: true
    }
})

module.exports = model('User', userSchema)
