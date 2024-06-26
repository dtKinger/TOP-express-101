const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {type: String,
    // enum: ["Fiction", "Non-fiction", "Scient-fiction", "Fantasy", "Romance", "Mystery", "Thriller"],
    minLength: 3,
    maxLength: 100,
  },
});

// Virtual for book's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", GenreSchema);