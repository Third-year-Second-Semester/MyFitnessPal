import axios from "axios";
import { Button } from "bootstrap";
import React, { Component } from "react";
import Navbar from "../../NavBar/Navbar.component";
import "./viewblogpost.css";

class ViewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.commentSubmit = this.commentSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      blogs: [],
      allComments: [],
      comments: [],
      date: "",
      blogid: "",
      username: "",
      email: "",
      comment: "",
      posteddate: "",
      alertMsg: ""
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount(e, id) {
    axios
      .get(`http://localhost:8084/blogposts/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ blogs: response.data.data });
        this.setState({ date: this.state.blogs.date });

        // console.log(response.data.data._id);
        // console.log(this.props.match.params.id);
      });

    axios
      .get(
        `http://localhost:8084/blogposts/comments/${this.props.match.params.id}`
      )
      .then((response) => {
        // console.log(response.data.data);
        this.setState({ comments: response.data.data });
        ///console.log(this.state.comments);
      });
  }

  componentDidUpdate(e) {
    axios
      .get(
        `http://localhost:8084/blogposts/comments/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({ comments: response.data.data });
        
      });
    
  }

  //===================================================================================================================
  commentSubmit = (e) => {
    e.preventDefault();

      let newComment = {
        blogid: this.props.match.params.id,
        username: this.state.username,
        email: this.state.email,
        comment: this.state.comment,
        posteddate: Date.now(),
      };

      axios
        .post("http://localhost:8084/blogposts/save", newComment)
        .then((response) => {
          console.log("data  "+response.data);
          if (response.data == null) {
            this.setState({ alertMsg: "Username is already existing" });
          } else {
            this.setState({alertMsg: "Comment is posted!!"})
          }
          
        })
        .catch(err => {
          alert("error = "+err);
        });

    // if (this.state.allComments.username != this.state.username) {
      
    // } else {
    //   alert("This username has been used already!!");
    // }

  };
  //=========================================================================================================================

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <br />
          <h2 className="blogtitle">{this.state.blogs.title}</h2>
          <br />
          <img
            className="blogimg"
            src={`http://localhost:8084/${this.state.blogs.image}`}
          />
          <br />
          <br />
          <textarea
            className="bodycontent"
            onInput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
            value={this.state.blogs.bodyContent}
          >
            {this.state.blogs.bodyContent}
          </textarea>
          {/* <div className="bodycontent">{this.state.blogs.bodyContent}</div> */}
          <br />
          <p className="date">{this.state.date.substr(0, 10)}</p>
          <br />
          <br />

          <div className="commentsection">
            <div className="commentheader">Comment Section</div>
            <br />
            <form onSubmit={this.commentSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Comment
                </label>
                <textarea
                  name="comment"
                  value={this.state.comment}
                  onChange={this.onChange}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                POST
              </button>
            </form>
            <br />
            <div class="alert alert-info" role="alert">
              {this.state.alertMsg}
            </div>
            <br />

            <div>
              <p>
                <b>Comments</b>
              </p>
              {this.state.comments.length > 0 &&
                this.state.comments.map((comments) => (
                  <div className="" style={{ width: "500px" }}>
                    <ul className="card-body">
                      <li>
                        <strong class="text-success">
                          {comments.username}
                        </strong>
                        <span className="text-muted">
                          <small className="text-muted right">
                            {comments.posteddate.substring(0, 10)}
                          </small>
                        </span>
                        <p className="">{comments.comment}</p>
                      </li>
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewBlogPost;
