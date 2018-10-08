const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({

	username: { type: String, unique: true, required: true, trim: true },
	password: { type: String, unique: false, required: true },
	firstName: { type: String, required: true, trim: true },
	lastName: { type: String, required: true, trim: true },
	fullName: String, // get automatically generated from first and last name
	profile: {
		pic: { type: String, trim: true, default: "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" },
		github: { type: String, trim: true },
		linkedin: { type: String, trim: true },
		portfolio: { type: String, trim: true },
		projects: { type: Array, trim: true },
		languages: { type: Array, trim: true, default: "" }, // favorite programming languages
		technologies: { type: Array, trim: true, default: "" }, // technologies
		jobInfo: {
			title: { type: String, trim: true },
			company: { type: String, trim: true },
		}
	},
	numFollowers: { type: Number, default: 0 },
	following: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "User" }
	]
});

// Define schema methods
userSchema.methods.checkPassword = function (inputPassword) {
	console.log(inputPassword);
	return bcrypt.compareSync(inputPassword, this.password);
};

userSchema.methods.hashPassword = plainTextPassword => {
	return bcrypt.hashSync(plainTextPassword);
};

// Handle followers/following
userSchema.methods.follow = function (user_id) {
	if (this.following.indexOf(user_id) === -1) {
		this.following.push(user_id);
	};
	return this.save();
};

userSchema.methods.unfollow = function (user_id) {
	for (let i=0; i < this.following.length; i++) {
		if (this.following[i]._id == user_id) {
			console.log("splicing id " + user_id);
			this.following.splice(i, 1);
		};
	};
	return this.save();
};

userSchema.methods.incrementFollowers = function () {
	this.numFollowers += 1;
	console.log("--- NUM FOLLOWERS: " + this.numFollowers);
	return this.save();
};

// Hash password, generate full name
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/User.js =======NO PASSWORD PROVIDED=======');
		next();
	} else {
		// proceed further only if the password is modified or the user is new
    if (!this.isModified('password')) return next();
		this.password = this.hashPassword(this.password);
		this.fullName = `${this.firstName} ${this.lastName}`;
		next();
	};
});

// Set up and export model
const User = mongoose.model('User', userSchema);
module.exports = User;
