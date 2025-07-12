import cloudinary from "../lib/cloudinary.js";
import Addproduct from "../models/addProduct.js";



export const addProductController=async (req , res)=>{
    const {item, description,image}= req.body;
    try{
       let imageResponse = null;
if(image){
  try {
    const uploadResponse = await cloudinary.uploader.upload(image);
    imageResponse = uploadResponse.secure_url;
  } catch(uploadErr) {
    console.error("Cloudinary upload error:", uploadErr);
  }
}

        const addproduct= await Addproduct.create({
            item,
            description,
            image:imageResponse,
        });
        if(addproduct){
            res.json({success:true,message:"item added successfully",addproduct});
        }
        else{
            res.json({success:false,message:"items not added"})
        }
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}


export const getProducts=async (req,res)=>{
    try{
    const products=await Addproduct.find();
    if(products){
    res.json({success:true,message:"fetched all data",products});
    }
}
catch(error){
    res.json({success:false,message:error.message});
}
}
