import Post from "../models/postModel.js";

export const createPost=async(req,res)=>{
    try{
        const {title,body}=req.body;

        const post =new Post({title,body,});

        const savedPost=await post.save();

        res.status(200).json({
            post:savedPost,
        })
    }catch(error)
    {
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:error.message,
        })
    }
}

export const getAllPosts= async(req,res)=>{
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.status(200).json({
            posts:posts,
        })
    }catch(error){
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:error.message,
        })
    }
}