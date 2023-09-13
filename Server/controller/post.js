import mongoose from "mongoose";
import postMessge from "../models/postMessage.js"

export const getPost = async (req,res) => {
   try {
     const response =await postMessge.find();
     res.json(response);
   } catch (error) {
     res.json({Message:error.Message})
   }
}
export const createPosts = async (req,res) => {
  const post = req.body;
  const newPost = new postMessge(post);
  try {
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.json({Message:error.Message})
  }
}
export const updatePosts = async (req,res) => {
  const {id:_id}=req.params;
  const post = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.json("not found");
  const updatedPost=await postMessge.findByIdAndUpdate(_id,post,{new:true});
  res.json(updatedPost);
}
export const deletePosts = async (req,res) => {
  const {id}=req.params;
  
  if(!mongoose.Types.ObjectId.isValid(id)) return res.json("not found");
  await postMessge.findByIdAndRemove(id);
  res.json('post deleted');
}
export const likePost = async (req,res) => {
  const {id}=req.params;
  
  if(!mongoose.Types.ObjectId.isValid(id)) return res.json("not found");
  const post = await postMessge.findById(id);
  const likePost=await postMessge.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
  res.json(likePost);
}