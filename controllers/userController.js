const db = require("../models");
// const passport = require('../passport');

// User controller
module.exports = {

  /* ----- REGISTER ------
  route- post /user/register
  body- username, password, firstName, lastName
  */
  register: (req, res) => {
    const { username, password, firstName, lastName } = req.body;
    // ADD VALIDATION
    db.User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log('User.js post error: ', err);
        res.json({ success: false, message: err });
      } else if (user) {
        res.json({ success: false, message: "Username already taken" });
      } else {
        db.User.create({
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName
        }).then(data => {
          console.log(data);
          res.redirect(307, "/user/login");
        }).catch(err => {
          console.log(err);
          res.json(err);
        });
      };
    });
  },

  /* ----- LOGIN ------
  route- post /user/login
  body- username, password
  */
  /* Login handled in routes/user.js */


  /* ----- GET USER DATA (of logged in user) ------
  route- get /user
  */
  getUserData: (req, res, next) => {
    if (req.user) {
      db.User.findOne({ _id: req.user._id }).then(user => {
        res.json(user);
      }).catch(err => {
        res.json({ success: false, message: err });
      })
    } else {
      res.json({ success: false, message: "No user loggeed in" });
    }
  },

  /* ----- GET USER DATA (by user id) ------
  route- get /user/:id
  params- user_id
  */
  getUserDataById: (req, res, next) => {
    db.User.findOne({ _id: req.params.id }).then(user => {
      res.json(user);
    }).catch(err => {
      res.json({
        success: false,
        message: "Could not find user " + req.params.id,
        error: err
      });
    })
  },

  /* ----- LOGOUT ------
  route- get /user/logout
  */
  logout: (req, res) => {
    if (req.user) {
      req.logout();
      res.send({ msg: 'logging out' });
    } else {
      res.send({ msg: 'no user to log out' });
    };
  },


  /* ----- UPDATE PROFILE ------
  route- put /user/profile
  body- all data to update. see User model for body structure
  */
  updateProfile: (req, res) => {
    if (!req.user) return res.json({ success: false, message: "Not signed in" });
    const userId = req.user._id;
    db.User.findOneAndUpdate({ _id: userId }, req.body, { new: true }).then(data => {
      console.log(data);
      res.json({ success: true, message: "Updated profile!", profile: data.profile });
    }).catch(err => {
      res.json({ success: false, message: err });
    })
  }

};