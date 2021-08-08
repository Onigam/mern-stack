const express = require('express');
const passport = require('passport');
const { body } = require('express-validator');

const PostController = require('../controllers/post.controller');

const router = express.Router();

const authRoute = passport.authenticate('jwt', { session: false });

const postInputvalidation = [
    body('post.name', 'name required').exists().trim().escape(),
    body('post.title', 'title is required').exists().trim().escape(),
    body('post.content', 'content is required').exists().trim().escape()
];

// Get all Posts
router.route('/').get(PostController.getPosts);

// Get one post by cuid
router.route('/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/').post(authRoute, postInputvalidation, PostController.addPost);

// Delete a post by cuid
router.route('/:cuid').delete(authRoute, PostController.deletePost);

module.exports = router;
