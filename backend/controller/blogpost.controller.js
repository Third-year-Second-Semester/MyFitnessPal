const BlogPost = require('../models/blogpost.model');

//create blogpost
const createBlogPost = async (req, res) => {
  if (req.body) {
    const blogpost = new BlogPost(req.body);
    await blogpost
      .save()
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
    .then( data => {
        res.status(200).send({data: data});
    })
    .catch( error => {
        res.status(500).send({error: error});
    });
 }

//get a BlogPost
const getaBlogPost = async (req, res) => {
    if(req.params && req.params.id){
        await BlogPost.findById(req.params.id)
        .then(response => {
            res.status(200).send({data: response});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}

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
    if(req.params && req.params.id){
        await BlogPost.findByIdAndRemove(req.params.id)
        .then(response => {
            res.status(200).send({data: response});
        })
        .catch(error => {
            res.status(500).send({error: error.message});
        });
    }
}


 module.exports = {
   createBlogPost,
   getAllBlogPostsDetails,
   getaBlogPost,
   updateBlogPost,
   deleteBlogPost,
 };