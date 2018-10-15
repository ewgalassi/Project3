const express = require("express");
const router = express.Router();
const db = require("../models");

// Get all comments of all posts (only used for testing)
router.get("/", (req, res) => {
  db.Comment.find()
    .then(data => {
      return res.json(data);
    }).catch(err => {
      console.log(err);
      return res.json({ success: false, message: err });
    });
});

router.route("/:postId")

  // Get comments of a post
  .get((req, res) => {
    db.Comment.find({ belongsTo: req.params.postId })
      .then(data => {
        return res.json(data);
      }).catch(err => {
        console.log(err);
        return res.json({ success: false, message: err });
      });
  })

  // Add comment to a post
  .post((req, res) => {
    db.Comment.create({
      author: req.user._id,
      text: req.body.text,
      belongsTo: req.params.postId
    })
      .then(comment => {
        db.Post.findById(req.params.postId).then(post => {
          return post.comment(comment._id).then(() => {
            return res.json({ success: true });
          }).catch(err => {
            console.log(err);
            return res.json({ success: false, message: err });
          });
        }).catch(err => {
          console.log(err);
          return res.json({ success: false, message: err });

        })

      }).catch(err => {
        console.log(err);
        return res.json({ success: false, message: err });
      });
  })

  // Delete a comment
  .delete((req, res) => {
    // we use postId param as comment id
    db.Comment.findByIdAndDelete(req.params.postId)
      .then(data => {
        return res.json({ success: true, message: data });
      }).catch(err => {
        console.log(err);
        return res.json({ success: false, message: err });
      });
  })

module.exports = router;
