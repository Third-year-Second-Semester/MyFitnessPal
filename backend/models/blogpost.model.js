const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: {type: String},
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
});


const Blogpost = mongoose.model("blogpost", BlogPostSchema);
module.exports = Blogpost;