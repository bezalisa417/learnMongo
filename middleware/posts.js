const jwt = require('jsonwebtoken');
const Post = require('../models/Post.js');

const protect = (req,res,next) => {
    const authorHeader = req.body.Authorization;

    //check header
    if(!authorHeader || !authorHeader.startsWith("Bearer ")){
        return res.json({message: "Unauthorized"});
    }
    const toke = authorHeader.split(' ')[1];
    const decoded = jwt.verify(toke, process.env.JWT_SECRET);

    //attach user
    req.body.user = decoded.id;

}
module.exports = protect;