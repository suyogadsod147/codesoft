const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const verifyToken = require('../middleware/veryfyToke');

// create 
router.post('/create', verifyToken , async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

// update
router.put("/:id",verifyToken , async(req , res )=>{
    try {
        
        const updatedComment = await Post.findByIdAndUpdate(req.params.id ,{$set:req.body} , {new:true})
        res.status(200).json(updatedComment)

    } catch (error) {
        res.status(200).send(error);
    }
})

// delete 
router.delete("/:id", verifyToken ,async (req, res) => {
   try {
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json("Comment deleted")
   } catch (error) {
    res.status(500).send(error);
   }
})






//  get post comments
router.get("/post/:postId", async (req, res) => {
    try {
     const comments = await Comment.find({postId: req.params.postId})
     res.status(200).json(comments)
    } catch (error) {
     res.status(500).send(error);
    }
 })


module.exports = router