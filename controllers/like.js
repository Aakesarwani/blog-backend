import Like from "../models/likeModel.js"
import Post from "../models/postModel.js";

export const likePost= async(req,res)=>{
    try{
        const {user,post}=req.body;

        const like= new Like({user,post});

        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
                            .populate("likes")
                            .exec();
        res.status(200).json({
            post:updatedPost,
        })


    }catch(error){
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:error.message,
        })
    }
}

export const unlikePost= async(req,res)=>{
    try{
        const {post,like}=req.body;
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost =await Post.findByIdAndDelete(post,{$pull:{likes:deletedLike._id}},{new:true});
        res.status(200).json({
            post:updatedPost,
        })
    }catch(error){
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:error.message,
        })
    }
}

