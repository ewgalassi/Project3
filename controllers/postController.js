const db = require("../models");
const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')(),
]);
const got = require('got');

// Post controller
module.exports = {

  /* CREATE A NEW POST
    route- POST /api/posts
    body- post, type
  */
  addPost: (req, res, next) => {
    if (!req.user) {
      return res.json({ success: false, message: "Not signed in" });
    };

    let { post, type } = req.body;
    let author = req.user._id;

    if (req.body.type === "article") {
    const targetUrl = req.body.post;
  ; (async () => {
    const { body: html, url } = await got(targetUrl);
    const articleMetadata = await metascraper({ html, url });
    savePost({ post, type, author, articleMetadata });    
		console.log(metadata);
    return metadata;
    })()
  } else if(req.body.type === "snippet"){
    savePost({post, type, author}).then(post => {

    })
  }
  else {
    savePost({ post, type, author });
  }


    function savePost(obj) {
      new db.Post(obj).save((err, post) => {
        if (err) {
          res.json({ success: false, message: err });
        } else if (!post) {
          res.send(400);
        } else {
          return res.json({ success: true, message: post });
        };
        next();
      });
    };
  },

  /* GET ALL POSTS (news feed etc...)
    route- GET /api/posts
  */
  getAll: (req, res, next) => {
    db.Post.find()
      .sort({_id: -1})
      .populate('author', ['fullName', 'username', 'profile.pic'])
      .populate('comments.author', ['fullName', 'username', 'firstName', 'profile.pic'])
      .exec((err, post) => {
        if (err)
          res.json({ success: false, message: err });
        else if (!post)
          res.send(404);
        else
          res.json(post);
        next();
      })
  },

  /* GET ALL POSTS BY USER ID (profile page)
    route- GET /api/posts/author/:id
    params- userId
  */
   getAllById: (req, res, next) => {
    db.Post.find({author: req.params.id})
      .sort({_id: -1})
      .populate('comments.author').exec((err, post) => {
        if (err)
          res.json({ success: false, message: err });
        else if (!post)
          res.send(404);
        else
          res.json(post);
        next();
      })
  },



  /* GET ALL SNIPPETS BY USER ID (saved snippets page)
    route- GET /api/posts/snippets/:id
    params- userId
  */
  getAllSnippetsById: (req, res, next) => {
    db.Post.find({author: req.user._id})
      .where("type").equals("snippet")
      .sort({_id: -1})
      .populate('comments.author').exec((err, post) => {
        
        if (err)
          res.json({ success: false, message: err });
        else if (!post)
          res.send(404);
        else
          
          res.json(post);
        next();
      })
  },




  /* LIKE A POST
    route- PUT /api/posts
    body- post_id
  */
  likePost: (req, res, next) => {
    const postId = req.body.post_id;
    const userId = req.user._id;
    db.Post.findById(postId).then((post) => {
      return post.like({
        author: userId
      }).then(() => {
        return res.json({ success: true, message: "Liked post!" });
      })
    }).catch(next);
  },


  /* ADD A COMMENT TO A POST
    route- POST /api/posts/comment
    body- post_id, comment
  */
  commentPost: (req, res, next) => {
    db.Post.findById(req.body.post_id)
    .then(post => {
      return post.comment({
        author: req.user._id,
        text: req.body.comment,
        firstName: req.user.firstName
      }, {new: true})
      .then((commentData) => {
        console.log(commentData);
        return res.json(commentData);
      })
    }).catch(err => {
      console.log(err);
      res.json(err);
      next();
    });
  },


  /* FETCH ONE INDIVIDUAL POST
    route- get /api/posts/:id
    params- id (the post's id)
  */
  getPost: (req, res, next) => {
    db.Post.findById(req.params.id)
      .populate('author')
      .populate('comments.author').exec((err, post) => {
        if (err)
          res.json({ success: false, message: err });
        else if (!post)
          res.sendStatus(404);
        else
          res.json(post);
        next();
      })
  },

  /* EDIT POST
    route- put /api/posts/:id
    params- id (the post's id)
    body- post
  */
  editPost: (req, res, next) => {
    res.send("Working on it...");
  },

  /* DELETE POST
    route- delete /api/posts/:id
    params- id (the post's id)
  */
  deletePost: (req, res, next) => {
    db.Post.findOneAndDelete({_id: req.params.id}).then(() => {
      res.json({success: true, message: "Deleted post"})
    }).catch(err => {
      res.json({success: false, message: err})
    });
  }

};
