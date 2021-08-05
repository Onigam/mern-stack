const express = require('express');
const passport = require('passport');
const PostController = require('../controllers/post.controller');

const router = express.Router();

const authRoute = passport.authenticate('jwt', { session: false });

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(authRoute, PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(authRoute, PostController.deletePost);

module.exports = router;
