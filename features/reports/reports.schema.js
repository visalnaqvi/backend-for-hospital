import mongoose from "mongoose";


//Report Schema
const reportSchema = new mongoose.Schema({
    createdBy:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now // Useing the `default` option to set the current timestamp
    },
    patitentId:{
        type:String,
        required:true
    }
})

const Report = mongoose.model("Report" , reportSchema)

export default Report;