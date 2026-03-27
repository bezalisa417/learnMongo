const {Schema, model} = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    },
    reels:{
        type: String,
        require: true
    },
    stories: { 
        type: String,
        require: true
    }
});
module.exports = model('Category', categorySchema);