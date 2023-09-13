import mongoose from "mongoose";

const schema =new mongoose.Schema({
    title:String,
    message:String,
    creater:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createAt:{
        type:Date,
        default:new Date()
    }
},
{
    collection:"postMessage"
},
)

const postMessge = mongoose.model("postMessage",schema);
export default postMessge;