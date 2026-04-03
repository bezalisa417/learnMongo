const express = require('express')
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User.js');

//register
router.post('/register', async (req,res) => {
    const {name,email,phone,password} = req.body;

    //checking if user already exists
    const exists = await User.findOne({email});
    if(exists){
        return res.json({message: "User already exists"});

    }
    //hashing password  
    const hashedPassword = await bcrypt.hash(password,10);

    const usser = await User.create({name, email, phone, password: hashedPassword })

    res.json({message: "User registered successfully"});


})

//login
router.post('/login', async (req,res) => {
    const{email, password} = req.body;

    //checking email
    const exists = await User.findOne({email});
    if(!exists){
        return res.json({message: "User not found"});
    }
    //checking password 
    const isMatch = await bcrypt.compare(password,exists.password);
    if(!isMatch){
        return res.json({message: "invalid credentials"});
    }

    //creating token
    const token = jwt.sign(
        {id: exists._id},
         process.env.JWT_SECRET, 
        {expiresIn:"1d"}
    );

    res.json({message:"login successfully", token});
    
})

module.exports = router;
