import mongoose, { Schema, Types } from 'mongoose';

const addProduct = new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    owner:{
        type:String
    }
});

const Addproduct = mongoose.model("addproduct",addProduct);
export default Addproduct;