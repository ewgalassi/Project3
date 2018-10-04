const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({

  conversation: [
    {

      message: {
        type: String,
        required: "No message provided",
        trim: true
      },
      from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },

    }
  ],

  createdAt: {
    type: Date,
    default: Date.now
  },
  read: {
    type: Boolean,
    default: false
  },
  // OG from
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  // OG to
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
});

// Appending to a conversation ("REPLY")
MessageSchema.methods.reply = function (msg, from) {

  const newMsg = {
    message: msg,
    from: from
  };

  this.conversation.push(newMsg);

};

// Mark as read
MessageSchema.methods.markAsRead = function () {
  this.read = true;
  return this.save();
};

// Save the OG from and to IDs
MessageSchema.pre("init", function (next) {
  this.from = this.conversation[0].from;
  this.to = this.conversation[0].to;
  return next();
});

module.exports = mongoose.model("Message", MessageSchema);
