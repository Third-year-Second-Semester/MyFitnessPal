import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../NavBar/Navbar.component";
import "./createBlog.css";
import { confirmAlert } from "react-confirm-alert";

const blog = {
  title: "",
  bodyContent: "",
  date: Date.now(),
  image: ""
};

class CreateBlogPost extends Component {
  constructor(prop) {
    super(prop);

    this.onChange = this.onChange.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
      this.state = blog;
    }
    
    componentDidMount(e, id) {
        axios.get(`http://localhost:8084/blogposts/${this.props.match.params.id}`)
            .then(response => {
                console.log(response.data.data);
                const newBlog = response.data.data;
                console.log("Image = " + newBlog.image.substr(21,42));

              this.setState({
                title: newBlog.title,
                bodyContent: newBlog.bodyContent,
                date: Date.now(),
                image: ""
              });

              
        });
    }

  //set input values to state
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //set upload image file
  handlePhoto = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("bodyContent", this.state.bodyContent);
    formData.append("date", Date.now());
    formData.append("image", this.state.image);

    console.log(formData);

    axios
      .put(
        `http://localhost:8084/blogposts/update/${this.props.match.params.id}`,
        formData
      )
      .then((response) => {
         confirmAlert({
           title: "Blog post Succesfully updated",
           buttons: [{ label: "OK" }],
         });

        //alert("Blog post Succesfully updated");

        this.setState({
          title: "",
          bodyContent: "",
          date: Date.now(),
          image: "",
        });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  render() {
    return (
      <div className="img-fluid">
        <Navbar />

        <div className="createContainer">
          <p className="form-header">EDIT BLOGPOST</p>
          <form id="blogForm" onSubmit={this.onSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Blog Title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                required
              />
            </div>
            <br />

            <div className="mb-3">
              <label for="formFile" className="form-label">
                Blog Post Image:
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                accept=".jpg,.png,.jpeg"
                name="image"
                onChange={this.handlePhoto}
              />
            </div>
            <br />

            <div className="mb-3">
              <label for="formFile" className="form-label">
                Body Content:
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="20"
                name="bodyContent"
                value={this.state.bodyContent}
                onChange={this.onChange}
                placeholder="Enter body content text"
              ></textarea>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <Link to="/adminbloglist">
          <button className="backbtn">Back</button>
        </Link>
      </div>
    );
  }
}

export default CreateBlogPost;
