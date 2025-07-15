import Users from "../models/user.js";
import bcrypt from 'bcryptjs';
import generateToken from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";


export const signup = async (req,res)=>{
   const {email, name, password,image}= req.body;

   try{
    if(!email|| !name|| !password || !image){
        return res.json({success:false,message:"missing details"})
    }
    const user=await Users.findOne({email});
    if(user){
        return res.json({success:false,message:"Account already exist"})
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);
    let imageUrl;
    const imageUpload=await cloudinary.uploader.upload(image);
    imageUrl=imageUpload.secure_url;

        const newUser= await Users.create({
            email,
            name,
            password: hashedPassword,
            image:imageUrl
        });

        const token= generateToken(newUser._id)
        res.json({success:true, newUser,token,message:"account created successfully"})
   }
   catch(error){
    res.json({error});
   }
};


export const login = async (req, res) =>{
   try{
    const {email, password}= req.body;
    const user=await Users.findOne({email});
     if(!user.email){
        return res.json({success:false,message:"account doesn't exist"})
    }
    const isPassword= await bcrypt.compare(password,user.password);
    if(!isPassword){
        return res.json({success:false,message:"password is not correct"})
    }
    const token= generateToken(user._id)
        res.json({success:true,user,token,message:"logged in sucessfully"})
   }
   catch(error)
   {
    res.json(error.message);
   }
}


export const checkAuth=(req,res)=>{
    res.json({success:true,user:req.user});
}
