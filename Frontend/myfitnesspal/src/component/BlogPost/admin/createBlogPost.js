import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../NavBar/Navbar.component';
import './createBlog.css';

 const initialState = {
   title: "",
   bodyContent: "",
   date: Date.now(),
   image: "",
 };
  
class CreateBlogPost extends Component {
  constructor(prop) {
    super(prop);

    this.onChange = this.onChange.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
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
      .post("http://localhost:8084/blogposts/create", formData)
      .then((response) => {
        alert("Blog post Succesfully added");

        this.setState({
          title: "",
          bodyContent: "",
          date: Date.now(),
          image: ""
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
          <p className="form-header">CREATE NEW BLOGPOST</p>
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
                rows="10"
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
        <button className="backbtn">
          Back
        </button>
        </Link>
      </div>
    );
  }
}

export default CreateBlogPost;