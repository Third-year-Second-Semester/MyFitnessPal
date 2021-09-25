const Comments = require('../models/comments.model');

//save comment
const saveComment = async (req, res) => {
    if (req.body) {
        
        const blogid = req.body.blogid;
        const username = req.body.username;
        const email = req.body.email;
        const comment = req.body.comment;
        const posteddate = Date.now();

        const newComment = {
            blogid,
            username,
            email,
            comment,
            posteddate
        };
    
        //const allComments = comments.find({ username: 1 });
        console.log("username = "+username);
        await Comments.findOne(
          { username: username },
          function (err, existingUser) {
               console.log("new = " + newComment.username);
              if (existingUser == null) {
                    console.log("new = " + newComment.username);
                 console.log("this username is not in there before.");
              const comments = new Comments(newComment);
                  comments
                      .save()
                      .then((data) => {
                          console.log("saved data =" + data);
                          res.status(200).send({ response: data });
                      });
                } else {
                    console.log("this username is in there before.")
                    res.json(null);
            }
          }
        )
        
    }
}

// get all comments
const getAllComments = async (req, res) => {
    await Comments.find()
        .then((data) => {
            res.status(200).send({ data: data });
        })
        .catch(err => {
        res.status(500).send({ error: err });
    })
}

//get all comments of a blog
const getAllCommentsOfABlog = async (req, res) => {
    const blogID = req.params.id;
    //console.log(blogID);
    await Comments.find({blogid: blogID})
        .then(data => {
            
            res.status(200).send({ data: data });
            
        })
        .catch(err => {
        res.status(500).send({ error: err });
    })
}

module.exports = {
    saveComment,
    getAllComments,
    getAllCommentsOfABlog
}