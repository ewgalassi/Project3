const mongoose = require('mongoose');

const POST_TYPE = "snippet";

let SavedSchema = new mongoose.Schema({
	type: { 
		type: String,
		required: "post type not specified",
		// validate: {
		// 	validator: function (input) {
		// 		if (!POST_TYPE.includes(input)) {
		// 			return false;
		// 		} else {
		// 			return true;
		// 		};
		// 	},
		// 	message: "type must be snippet"
		// }
	},
	post: {
		type: String,
		trim: true,
		required: "Post can not be blank"
	},
	likes: [
		{
			author: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User"
			}
		}
	],

	numLikes: {
		type: Number,
		default: 0
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	createdAt: {
		type: Date,
		default: Date.now
    },
    
	description: {
		type: String,
		trim: true
	},
	comments: [
		{
			author: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			},
			text: {
				type: String,
				trim: true
			},
			firstName: {
				type: String,
				trim: true
			}
		}
	]
});


module.exports = mongoose.model('Saved', SavedSchema);