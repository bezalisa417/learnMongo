const jwt = require('jsonwebtoken');

const protect = (req,res,next) => {
    const authHeader = req.header.authentirization;

    //cheak header
    if(!authHeader  || !authHeader.startsWith("Bearer ")){
        return res.json({message: "Unauthorized"});
    }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //attach user 
    req.user = decoded.id;

}
module.exports = protect;