const Saved = require("../models/Saved");

module.exports = {
    addPost: (req, res, next) => {
        let author = req.user._id;
        const post = req.body.post_id
            saveSnippet({author, post}, res)
        
    },

    getSavedSnippets: (req, res, next) => {
        console.log(req.user._id)
        
        Saved.find({author: req.user._id})
        .populate('post')
        .sort({_id: -1})
        .then(function(savedSnippets) {
            console.log(savedSnippets);
            // If all Users are successfully found, send them back to the client
            res.json(savedSnippets);
          })
          .catch(function(err) {
            console.log(err);
            // If an error occurs, send the error back to the client
            res.json(err);
          });
        
        
    }
}

function saveSnippet(obj, res) {
    new Saved(obj).save((err, post) => {
      if (err) {
        res.json({ success: false, message: err });
      } else if (!post) {
        res.send(400);
      } else {
        console.log("snippet saved");
      };
      
    });
  };