const express = require("express");
const router = express.Router();
const fileUpload = require("../MiddlewearBlogpost/blogpostImageupload");
const blogpostController = require("../controller/blogpost.controller");

module.exports = function () {

router.post('/create', fileUpload.single('image'),blogpostController.createBlogPost);
   router.put("/update/:id", blogpostController.updateBlogPost);
   router.delete("/delete/:id", blogpostController.deleteBlogPost);
   router.get("/:id", blogpostController.getaBlogPost);
   router.get("/", blogpostController.getAllBlogPostsDetails);

router.post("/upload",blogpostController.uploadBlogImg);

   return router; 
};
