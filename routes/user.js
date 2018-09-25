const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../passport');

router.post('/', (req, res) => {
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
        res.json(data);
      }).catch(err => {
        console.log(err);
        res.json(err);
      });
    };
  });
});

router.post('/login', function (req, res, next) {
  console.log('routes/user.js, login, req.body: ');
  console.log(req.body);
  next();
},
  passport.authenticate('local'),
  (req, res) => {
    res.send(req.user);
  }
);

router.get('/', (req, res, next) => {
  if (req.user) {
    db.User.findOne({ _id: req.user._id }).then(user => {
      res.json(user)
    }).catch(err => {
      res.json({ success: false, message: err });
    })
  } else {
    res.json({ success: false, user: null });
  }
});

router.get('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: 'logging out' });
  } else {
    res.send({ msg: 'no user to log out' });
  }
});

module.exports = router;
