const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: "User"
  },
  text: {
    type: String,
    trim: true
  },
  belongsTo: {
    type: mongoose.Schema.Types.ObjectId, ref: "Post"
  }
});


module.exports = mongoose.model("Comment", CommentSchema);
