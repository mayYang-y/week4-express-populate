const express = require('express');
const router = express.Router();
const postController = require('../controllers/postsController');

// 取得所有 post
router.get('/', postController.getPosts);

// 新增一筆 post
router.post('/', postController.createPost);

module.exports = router;
