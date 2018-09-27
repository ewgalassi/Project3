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
		languages: { type: Array, trim: true }, // favorite programming languages
		technologies: { type: Array, trim: true }, // technologies
		jobInfo: {
			title: {type: String, trim: true },
			company: {type: String, trim: true },
		}
	}
});

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword);
	},
};

// Hash password, generate full name
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/User.js =======NO PASSWORD PROVIDED=======');
		next();
	} else {
		this.password = this.hashPassword(this.password);
		this.fullName = `${this.firstName} ${this.lastName}`;
		next();
	};
});

// Set up and export model
const User = mongoose.model('User', userSchema);
module.exports = User;
