const User = require("../models/User");
const jwt = require("jsonwebtoken");

const {UnauthenticatedError} = require("../errors");

const auth = async (req,res,next)=>{
    //check header

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){

        console.log("up");
        throw new UnauthenticatedError ("Authentiction invalid");
    }
    const token = authHeader.split(" ")[1];
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        //atach the user to job routes
        
        req.user ={userId:payload.userId,name:payload.name}
        next();
    }   
    catch(error){
        console.log("down");
        throw new UnauthenticatedError("Authenticatin invalid");
    }
}

module.exports = auth;
