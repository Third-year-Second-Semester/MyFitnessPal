const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  bodyContent: { type: String, trim:true },
  date: { type: Date, default: Date.now() },
  image: {type: String},

  
});


const blogposts = mongoose.model("blogpost", BlogPostSchema);
module.exports = blogposts;