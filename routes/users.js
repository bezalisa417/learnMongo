const express = require('express');
const router = express.Router();

const User = require('../models/User.js');

//get user
router.get('/',async (req,res) => {
    const users = await User.find();
    res.json({message:'users fetched!',users})
})

//create user
router.post('/',async (req,res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: 'name and email are required' });
        }
        const user = await User.create(req.body);
        res.json({message:'user created!',user});
    } catch (err) {
        res.status(400).json({ message: err.message, error: err });
    }
})
module.exports = router;
