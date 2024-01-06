const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title :{
        type: 'string',
        required: true,
    },
    description :{
        type : 'string',
        required: true,
    },
    photo :{
        type : 'string',
        required: false,
    },
    username :{
        type : 'string',
        required: true,
    },
    userId :{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
    categories :{
        type :Array,
    }

},{timestamps: true})


module.exports = mongoose.model("Post" , PostSchema);