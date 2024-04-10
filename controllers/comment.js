import Comment from "../models/commentModel.js";
import Post from "../models/postModel.js";

export const createComment= async(req,res)=>{
    try{
        const {post, user, body} =req.body;

        const comment = new Comment({
            post,user,body
        });

        const savedComment =await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
                            .populate("comments")
                            .exec();

        res.status(200).json({
            post:updatedPost,
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:error.message,
        })
    }
};