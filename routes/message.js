const express = require("express");
const router = express.Router();
const db = require("../models");

router.route("/")

  // POST A MESSAGE -------------------
  // POST /api/message
  // body: to, message
  .post((req, res) => {
    if (!req.user) return res.json({ success: false, message: "Not signed in" });

    db.Message.create({
      message: req.body.message,
      from: req.user._id,
      to: req.body.to
    }).then(data => {
      return res.json({ success: true, message: data })
    }).catch(err => {
      console.log(err);
      return res.json({ success: false, message: err });
    });
  })

  // GET ALL MESSAGES ----------------
  // GET /api/message
  .get((req, res) => {
    if (!req.user) return res.json({ success: false, message: "Not signed in" });
    db.Message.find({ to: req.user._id })
      .populate("from", ["profile.pic", "fullName", "firstName"])
      .populate("to", ["profile.pic", "fullName", "firstName"])
      .exec((err, messages) => {
        if (err) return res.send(err);
        res.json({total: messages.length, messages: messages});
      });
  })


router.route("/unread")

  // GET UNREAD ONLY -----------------
  // GET /api/message/unread
  .get((req, res) => {
    if (!req.user) return res.json({ success: false, message: "Not signed in" });
    db.Message.find({ to: req.user._id })
      .where("read").equals(false)
      .populate("from", ["profile.pic", "fullName", "firstName"])
      .populate("to", ["profile.pic", "fullName", "firstName"])
      .exec((err, messages) => {
        if (err) return res.send(err);
        messages.forEach(message => {
          message.markAsRead();
        });
        res.json({
          total: messages.length,
          messages: messages
          });
      });
  })





module.exports = router;
