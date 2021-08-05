const cuid = require('cuid');
const slug = require('limax');
const { validationResult } = require('express-validator');

const Post = require('../models/post');

/**
 * Finds a post by id
 * @param cuid the post cuid
 * @returns the post object
 * @throws 404 error if the post isn't found
 */
findPostByCuId = async (cuid) => {
  const post = await Post.findOne({ cuid: cuid });

  if (!post) {
    const error = new Error("Not found");
    error.statusCode = 404;
    throw error;
  }

  return post;
}

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort('-dateAdded').limit(req.query.limit).skip(req.skip);
    res.json({ posts });
  } catch (error) {
    next(error);
  }
};

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
addPost = async (req, res) => {
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const newPost = new Post({
      title: req.body.title,
      name: req.body.name,
      content: req.body.content,
      creator: req.user._id.toString()
    });

    newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
    newPost.cuid = cuid();

    const saved = await newPost.save();

    res.json({ post: saved });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
getPost = async (req, res) => {
  try {
    const post = await findPostByCuId(req.params.cuid);

    res.json({ post });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
deletePost = async (req, res, next) => {
  try {
    const post = await findPostByCuId(req.params.cuid);

    //only the post creator should be able to delete posts
    if (post.creator.toString() !== req.user._id.toString()) {
      const error = new Error("Permission denied");
      error.statusCode = 403;
      throw error;
    }

    await post.remove();
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPosts,
  addPost,
  getPost,
  deletePost
};
