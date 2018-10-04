const express = require("express");
const router = express.Router();
const db = require("../models");

router.route("/")

  // POST A MESSAGE -------------------
  // POST /api/message
  // body: to, message
  .post((req, res) => {
    if (!req.user) return res.json({ success: false, message: "Not signed in" });
    db.User.findOne({ username: req.body.to }).then(user => {
      db.Message.create({
        conversation: [{
          message: req.body.message,
          from: req.user._id,
          to: user._id
        }]
      }).then(data => {
        return res.json({ success: true, message: data })
      }).catch(err => {
        console.log(err);
        return res.json({ success: false, message: err });
      });
    }).catch(err => {
      console.log(err);
    })

  })

  // GET ALL MESSAGES ----------------
  // GET /api/message
  .get((req, res) => {
    if (!req.user) return res.json({ success: false, message: "Not signed in" });
    db.Message.find({ to: req.user._id })
      .sort({ _id: -1 })
      .populate("conversation.from", ["profile.pic", "fullName", "firstName"])
      .populate("conversation.to", ["profile.pic", "fullName", "firstName"])
      .populate("from", ["profile.pic", "fullName", "firstName"])
      .exec((err, messages) => {
        if (err) return res.send(err);
        res.send(messages);
      });
  })

  // REPLY TO A MESSAGE -----------------
  // PUT /api/message
  // body: message_id, reply
  .put((req, res) => {
    if (!req.user) return res.json({ success: false, message: "Not signed in" });
    db.Message.findById(req.body.message_id).then(message => {
      console.log("--- ABOUT TO REPLY ---");
      return message.reply({
        message: req.body.reply,
        from: req.user._id
      }).then(data => {
        console.log("--- REPLIED ---");
        console.log(data);
        return res.json({ success: true, message: "Replied!" });
      });
    }).catch(err => {
      console.log(err);
      res.send(err);
    });
  })

  // DELETE A MESSAGE -----------------
  // DELETE /api/message
  // body: message_id
  .delete((req, res) => {
    if (!req.user) return res.json({ success: false, message: "Not signed in" });
    console.log(req.body.message_id);
    db.Message.findByIdAndDelete(req.body.message_id).then(data => {
      res.send(data);
    }).catch(err => {
      console.log(err);
      res.json({ success: false, message: err });
    });
  })


router.route("/unread")

  // GET UNREAD ONLY -----------------
  // GET /api/message/unread
  .get((req, res) => {
    if (!req.user) return res.json({ success: false, message: "Not signed in" });
    db.Message.find({ to: req.user._id })
      .where("read").equals(false)
      .sort({ _id: -1 })
      .populate("from", ["profile.pic", "fullName", "firstName"])
      .populate("to", ["profile.pic", "fullName", "firstName"])
      .exec((err, messages) => {
        if (err) return res.send(err);
        messages.forEach(message => {
          message.markAsRead();
        });
        res.send(messages);
      });
  })





module.exports = router;
