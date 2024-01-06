const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment :{
        type : 'string',
        required: true,
    },
    author :{
        type : 'string',
        required: true,
    },
    postId :{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post',
    },
    userId :{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    }

},{timestamps: true})


module.exports = mongoose.model("Comment" , CommentSchema)