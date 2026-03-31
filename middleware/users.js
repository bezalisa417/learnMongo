const jwt = require('jsonwebtoken');
const Post = require('../models/Post.js');

const protect = (req,res,next) => {
    const authHeader = req.header.Authorization;

    //check header
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.json({message: "Unauthorized"});
    }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.veerify(token, process.env.JWT_SECRET);

    //attach user
    req.body.user = decoded.id;

}
module.exports = protect;