const jweb = require('jsonwebtoken');

const protect = (req,res,next) => {
    const authHeader = req.headers.authorization;
     

    //check header
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.json({message: "Unauthorized"});
    }
    const token = authHeader.split(' ')[2];
    if(!token){
        return res.json({message: "Unauthorized"});
    }
    const decoded = jweb.verify(token, process.env.JWT_SECRET);

    //attach user 
    req.user = decoded.id;

    next();

}
module.exports = protect;



//Middleware is a function that runs before the main route and decides what should happen next.
