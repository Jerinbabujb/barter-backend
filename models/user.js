import mongoose, { Schema, Types } from 'mongoose';

const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
});

const Users = mongoose.model("users",user);
export default Users;