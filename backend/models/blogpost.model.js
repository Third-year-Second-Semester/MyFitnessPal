const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  bodyContent: { type: String, required: false },
  date: { type: Date, default: Date.now },
});


const Blogpost = mongoose.model("blogpost", BlogPostSchema);
module.exports = Blogpost;