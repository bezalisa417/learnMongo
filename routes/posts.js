const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

//get posts 
router.get('/', async (req,res) => {
    const posts = await Post.find().populate('author','name').populate('category','stories');
    res.json({message:'posts fetched!',posts})
})

//create posts
router.post('/',async(req,res) => {
    const post = await Post.create(req.body);
    res.json({message:'post created!',post})
})

module.exports = router;