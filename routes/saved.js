const savedController = require('../controllers/savedController');

const express = require("express");
let router = express.Router();

router.route('/posts/save')
  .post(savedController.addPost)
  .get(savedController.getSavedSnippets)

router.route('/posts/save/:id')
  .delete(savedController.unSave)


  module.exports = router;