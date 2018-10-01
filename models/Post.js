const mongoose = require('mongoose');
const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')(),
]);
const got = require('got');


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
}

// Add comment
PostSchema.methods.comment = function (c) {
	this.comments.push(c);
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

// PostSchema.methods.getMetadata = function(url) {
// 	  const targetUrl = url;
//   ; (async () => {
//     const { body: html, url } = await got(targetUrl);
//     const metadata = await metascraper({ html, url });
// 		this.articleMetadata = metadata;

// 		console.log(metadata);
//     return metadata;
//   })()
// }

// Article helper function (gets title, desc, image for post type "article")
// PostSchema.pre("save", function (next) {
// 	if (this.type === "article") {
// 	  this.getMetadata(this.post.trim());
// 		next();
// 	} else {
// 		next();
// 	};
// });

module.exports = mongoose.model('Post', PostSchema);
