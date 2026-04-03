const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment.js');
const protect = require('../middleware/auth.js');

// get comments (protected like posts)
router.get('/', protect, async (req, res) => {
    try {
        const comments = await Comment.find()
            .populate('author', 'name')
            .populate('post', 'title');

        res.status(200).json({ message: 'comments fetched!', comments });
    } catch (err) {
        res.status(500).json({ message: 'server error' });
    }
});

// create comment
router.post('/', protect, async (req, res) => {
    try {
        const { text, post } = req.body;
        const author = req.user;

        const comment = await Comment.create({
            text,
            post,
            author
        });

        res.status(201).json({ message: 'comment created!', comment });
    } catch (err) {
        res.status(500).json({ message: 'server error' });
    }
});

// edit comment
router.put('/:_id', protect, async (req, res) => {
    try {
        const { text, post } = req.body;
        const userId = req.params._id;

        await Comment.updateOne(
            { _id: userId },
            { text, post }
        );

        res.status(200).json({ message: 'comment updated!' });
    } catch (error) {
        res.status(500).json({ message: 'server error' });
    }
});

// delete comment
router.delete('/:_id', protect, async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params._id);

        res.status(200).json({ message: 'comment deleted!' });
    } catch (err) {
        res.status(500).json({ message: 'server error' });
    }
});

module.exports = router;