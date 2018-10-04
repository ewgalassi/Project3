const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	{
		usernameField: 'username' 
	},
	function(username, password, done) {
		db.User.findOne({ username: username }, (err, user) => {
			if (err) {
				console.log("ERR: \n" + err);
				return done(err)
			};
			if (!user) {
				console.log("Incorrect username");
				return done(null, false, { message: 'Incorrect username' })
			};
			if (!user.checkPassword(password)) {
				console.log("Incorrect password");
				return done(null, false, { message: 'Incorrect password' })
			};
			console.log("No errors, logging in!");
			console.log(user);
			return done(null, user)
		});
	}
);

module.exports = strategy;
