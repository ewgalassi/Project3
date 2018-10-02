const mongoose = require('mongoose');

const POST_TYPES = ["snippet", "status", "article"];

let PostSchema = new mongoose.Schema({
	type: { // either "snippet", "status", or "article"
		type: String,
		required: "post type not specified",
		validate: {
			validator: function (input) {
				if (!POST_TYPES.includes(input)) {
					return false;
				} else {
					return true;
				};
			},
			message: "type must be snippet, status, or article"
		}
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

	saves: [
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
	articleMetadata: {
		title: { type: String, trim: true },
		description: { type: String, trim: true },
		image: { type: String, trim: true }
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

// Add user who liked the post to array
PostSchema.methods.like = function (l) {
	this.likes.push(l);
	this.numLikes = this.likes.length;
	return this.save();
};

// Remove user from likes array
PostSchema.methods.unlike = function(l) {
	let index;
	for (let i=0; i < this.likes.length; i++) {
		if (this.likes[i].author === this.author) {
			index = i;
			break;
		};
	};
	this.likes.splice(index, 1);
	this.numLikes = this.likes.length;
	return this.save();
};

// Add comment
PostSchema.methods.comment = function (c) {
	this.comments.push(c);
	return this.save();
};

// Delete a comment
PostSchema.methods.deleteComment = function(c) {
	let index;
	for (let i=0; i < this.comments.length; i++) {
		if (this.comments[i]._id === c) {
			index = i;
			break;
		};
	};
	this.comments.splice(index, 1);
	return this.save();
};

// Edit post
PostSchema.methods.edit = function (updatedPost) {
	this.post = updatedPost;
	return this.save();
};

// Set author of post
PostSchema.methods.addAuthor = function (author_id) {
	this.author = author_id;
	return this.save();
};

// Get one user's posts
PostSchema.methods.getUserPosts = function (_id) {
	Post.find({ 'author': _id }).then((article) => {
		return article;
	});
};


module.exports = mongoose.model('Post', PostSchema);
