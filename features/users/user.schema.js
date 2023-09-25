import mongoose from "mongoose";

//User Schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    userId:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        default:"doctor"
    }
})

const User = mongoose.model("User",userSchema)

export default User;