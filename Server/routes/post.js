import express from 'express';
import { getPost,createPosts,updatePosts,deletePosts,likePost } from '../controller/post.js';
const router = express.Router();


router.get('/',getPost);
router.post('/',createPosts);
router.patch('/:id',updatePosts);
router.delete('/:id',deletePosts);
router.patch('/:id/likePost',likePost);
export default router; 