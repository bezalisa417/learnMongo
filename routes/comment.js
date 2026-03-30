const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment.js');

//get comments
router.get('/', async (req,res) => {
    const comments = await Comment.find().populate('author','name').populate('post','title');
    res.json({message:'comments fetched!',comments})
})

//create comments
router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.json({ message: 'comment created!', comment });
    } catch (err) {
        res.status(400).json({ message: 'comment save failed', error: err.message });
    }
})

module.exports = router;
