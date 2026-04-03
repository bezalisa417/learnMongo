const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name:{ 
        type: String,
        required: true
    },
    quantinty:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }
})
module.exports = model('Product', productSchema)
