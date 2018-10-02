const mongoose = require('mongoose');


let SavedSchema = new mongoose.Schema ({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }

})


module.exports = mongoose.model('Saved', SavedSchema);