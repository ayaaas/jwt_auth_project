import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fname:{
            type:String,
            required:true
        },
        lName:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required: true,
        },
        pwd:{
            type:String, 
            required:true,
        }
    }
);
const UserModel=mongoose.model("User",userSchema);
export default UserModel;