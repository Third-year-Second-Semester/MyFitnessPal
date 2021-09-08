const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
  blogid: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  comment: { type: String, required: true, trim: true },
  posteddate: { type: Date, default: Date.now() },
});

const comments = mongoose.model('comments', CommentsSchema);
module.exports = comments;