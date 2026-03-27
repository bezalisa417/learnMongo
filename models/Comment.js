const {Schema, model} = require('mongoose');

const commentSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        require: true
    },
})

module.exports = model('Comment',commentSchema);