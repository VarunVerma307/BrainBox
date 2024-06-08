const jwt=require("jsonwebtoken");
require("dotenv").config();
const user=require("../models/User");

exports.auth=async(req,res,next)=>{
    try{
      const token=req.body.token ||req.cookies.token ||req.header("Authorisation").replace("Bearer","");

      if(!token){
        return res.status(401).json({
            success:false,
            message:"Token is missing",
        });
      }
    try{
        const decode= jwt.verify(token,process.env.SECRET_KEY);
        console.log(decode);
        req.user=decode;
    }
    catch(err){
        return res.status(401).json({
            success:false,
            message:"Token is invalid",
        });
    }
    next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:error.message,
        });
    }
}
exports.isStudent=async(req,res,next)=>{
try{
if(req.user.accountType!=="Student"){
    return res.status(401).json({
        success:false,
        message:"This is protected route for student only",
    });

}
next();
}
catch(error){
    return res.status(401).json({
        success:false,
        message:error.message,
    });
}
}
exports.isInstructor =async(req,res,next)=>{
    try{
    if(req.user.accountType!=="Instructor"){
        return res.status(401).json({
            success:false,
            message:"This is protected route for instructor only",
        });
    
    }
    next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:error.message,
        });
    }
    }
    exports.isAdmin =async(req,res,next)=>{
        try{
        if(req.user.accountType!=="Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for admin only",
            });
        
        }
        next();
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:error.message,
            });
        }
        }