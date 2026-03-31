const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');
const protect = require('../middleware/auth.js');

//get posts 
router.get('/',protect, async (req,res) => {

    try {

    const posts = await Post.find().populate('author','name').populate('category','stories');
    res.status(200).json({message:'posts fetched!',posts})

    }catch(err){
        res.status(500).json({message:'server error'})
    }
})

//create posts
router.post('/',protect, async(req,res) => {

    try{

    const {title, body, category} = req.body;
    const author = req.user;

    const post = await Post.create({title, body, category, author});
    res.status(201).json({message:'post created!',post})

    }catch(err){
        res.status(500).json({message: 'server error'})
    }
})


//edit
router.put('/:_id',protect, async(req,res) =>{
    try{ 
        const {title, body, category} = req.body;
        const author = req.user;
        const userId = req.params._id;

        const updated = await Post.updateOne({_id:userId}, {
          title, body, category
        })

        res.status(200).json({message:'post updated!'})
    }catch (err){
        res.status(500).json({message: 'server error'})
    }
    
})

//delete post
router.delete('/:_id',protect, async(req,res) => {
    try{
        await Post.findByIdAndDelete( req.params._id);

        res.status(200).json({message:'post deleted!'})     
    }catch(err){
        res.status(500).json({message: 'server error'})
        console.log(err);

    }

})
module.exports = router;