const express = require("express");

const router = express.Router();
const fileUpload = require("../MiddlewearBlogpost/blogpostImageupload");
const blogpostController = require("../controller/blogpost.controller");
const commentController = require('../controller/comments.controller');
const comment = require("../models/comments.model");

module.exports = function () {

   
   router.post('/create', fileUpload.single('image'),blogpostController.createBlogPost);
   router.put("/update/:id", blogpostController.updateBlogPost);
   router.delete("/delete/:id", blogpostController.deleteBlogPost);
   router.get("/:id", blogpostController.getaBlogPost);
   router.get("/", blogpostController.getAllBlogPostsDetails);

   //comments routes
   router.post("/save", commentController.saveComment);
   router.get("/comments/all", commentController.getAllComments);
   router.get("/comments/:id", commentController.getAllCommentsOfABlog);


router.post("/upload",blogpostController.uploadBlogImg);

   return router; 
};
