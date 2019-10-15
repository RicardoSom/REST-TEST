const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// get back all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find(); //all the posts
        res.json(posts);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

// submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({
            message: error
        });
    }
});

// get back especific post
router.get('/:postId', async (req, res) => {
    try {
        let id = req.params.postId;
        const post = await Post.findById(id);
        res.json(post);
    } catch (error) {
        res.json(error);
    }
});

//delete post

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId}); 
        res.json(removedPost);
    } catch (error) {
        res.json({message: error});
    }
});

module.exports = router;