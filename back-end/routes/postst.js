import express from 'express';

import { createPostt, deletePostt, getPostst, getPostt, updatePostt, } from '../controllers/postst.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPostst);
router.post('/', auth, createPostt);
router.get('/:id', getPostt);
router.patch('/:id', auth, updatePostt);
router.delete('/:id', auth, deletePostt);

export default router;