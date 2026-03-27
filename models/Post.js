const {Schema, model} = require('mongoose');

const postSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    author: { 
          type: Schema.Types.ObjectId,
          ref:'User',
          require: true   
    },
    category:  {
        type: Schema.Types.ObjectId,
        ref:'Category',
        require: true
    }
})



module.exports = model('Post',postSchema);