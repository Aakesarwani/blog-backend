import express from "express";
import { createComment } from "../controllers/comment.js";
import { createPost, getAllPosts } from "../controllers/post.js";
import { likePost, unlikePost } from "../controllers/like.js";

const router=express.Router();

router.post("/comments/create",createComment);
router.post("/posts/create", createPost);
router.get("/posts/getAll",getAllPosts);
router.post("/likes/create",likePost);
router.post("/likes/unlike", unlikePost);



export default router;