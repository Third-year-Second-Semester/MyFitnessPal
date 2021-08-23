const { response } = require("express");
const BlogPost = require("../models/blogpost.model");

//create blogpost
const createBlogPost = async (req, res) => {
  if (req.body) {
    const title = req.body.title;
    const bodyContent = req.body.bodyContent;
    const date = req.body.date;
    const image = req.file.path;

    const newBlogpost = {
      title,
      bodyContent,
      date,
      image
    };

    const blogpost = new BlogPost(newBlogpost);
    await blogpost.save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

//get all BlogPosts details
const getAllBlogPostsDetails = async (req, res) => {
  await BlogPost.find({})
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error });
    });
};

//get a BlogPost
const getaBlogPost = async (req, res) => {
  if (req.params && req.params.id) {
    await BlogPost.findById(req.params.id)
      .then((response) => {
        res.status(200).send({ data: response });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

// update a blogpost
const updateBlogPost = async (req, res) => {
  if (req.params && req.params.id) {
    await BlogPost.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
      .then((response) => {
        res.status(200).send({ data: response });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

//delete a BlogPost
const deleteBlogPost = async (req, res) => {
  if (req.params && req.params.id) {
    await BlogPost.findByIdAndRemove(req.params.id)
      .then((response) => {
        res.status(200).send({ data: response });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

//upload proposal pdf
const uploadBlogImg = (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "Upload BlogPost Image" });
  }

  const blogpost = req.files.file;
  console.log("Upload Image...");
  console.log(blogpost);

  // workshopProposal.mv(`proposalUploads/${workshopProposal.name}`, err => {
  //     if(err){
  //         console.error(err);
  //        return res.status(500).send({res: err.message});
  //     }

  //     res.json({fileName: workshopProposal.name, filePath: `/proposalUploads/${workshopProposal.name}`})
  // });
};

module.exports = {
  createBlogPost,
  getAllBlogPostsDetails,
  getaBlogPost,
  updateBlogPost,
  deleteBlogPost,
  uploadBlogImg,
};
