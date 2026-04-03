const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth.js');

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

//edit 
router.put('/:_id', protect, async (req,res) => {
    try{ 
        const user ={email, phone, password} = req.body;
        const userId = req.body._id;
        const update = await User.updateOne({_id:userId}, {
             email, phone, password
        })

        res.status(200).json({message:'user updated!'})
    }catch (error){
        res.status(500).json({message:'server error'})
    }

 }) 
 
//delete user
router.delete('/:_id', protect, async (req,res) => {
    try{
        await User.findByIdAndDelete( req.params._id);
        res.status(200).json({message:'user deleted!'})
    }catch (error){
        res.status(500).json({message:'server error'})
    }
})

module.exports = router;
