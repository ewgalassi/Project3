const postController = require('../controllers/postController.js');

const express = require("express");
let router = express.Router();


// Get all posts/add a post/like a post
router.route('/posts')
  .get(postController.getAll)
  .post(postController.addPost)
  .put(postController.likePost)



// Add a comment
router.route('/posts/comment')
  .post(postController.commentPost)

// Get one post by id
router.route('/posts/:id')
  .get(postController.getPost)

// Edit a post
  .put(postController.editPost)

// Delete a post by id
  .delete(postController.deletePost)

// Get all posts by individual user
router.route("/posts/author/:id")
  .get(postController.getAllById)

router.route("/posts/types/snippets")
  .get(postController.getAllSnippetsById)
  // .get(postController.getAllSavedSnippets)

module.exports = router;
