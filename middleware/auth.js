import jwt from "jsonwebtoken";
import Users from "../models/user.js";

export const protectRoute = async (req, res,next)=>{

    try{
        const authHeader = req.headers.authorization;

if (!authHeader || !authHeader.startsWith("Bearer ")) {
  return res.status(401).json({ success: false, message: "Unauthorized" });
}

const token = authHeader.split(" ")[1]; // Extract actual token

        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        const user=await Users.findById(decoded.userId).select("-password");
        if(!user)
            return res.json({success:false, message:"User not found"});
        req.user=user;
        next();
    }
    catch(error){
             return res.json({success:false, message:error.message});
    }
}