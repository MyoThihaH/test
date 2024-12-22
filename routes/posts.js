import express from "express";

import {
  getPosts,
  createPosts,
  deletePost,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.delete("/", deletePost);
router.post("/update", updatePost);
export default router;
