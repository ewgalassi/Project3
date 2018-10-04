const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({

  conversation: [
    {
      message: {
        type: String,
        trim: true
      },
      from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
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
MessageSchema.methods.reply = function (reply) {
  this.conversation.push(reply);
  return this.save();
};

// Mark as read
MessageSchema.methods.markAsRead = function () {
  this.read = true;
  return this.save();
};

// Save the OG from and to IDs
MessageSchema.pre("save", function (next) {
  if (this.isNew) {
    console.log("IS NEW")
    this.from = this.conversation[0].from;
    this.to = this.conversation[0].to;
  };
    return next();
});

module.exports = mongoose.model("Message", MessageSchema);
