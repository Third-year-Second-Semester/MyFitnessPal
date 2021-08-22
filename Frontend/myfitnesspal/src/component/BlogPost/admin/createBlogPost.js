import React, { Component, useState } from 'react'
import axios from 'axios';
import Navbar from '../../NavBar/Navbar.component';
import TextEditor from './richTextEditor';
import './createBlog.css';
import { Editor, EditorState } from "draft-js";

 const initialState = {
   title: "",
   image: "",
   bodyContent: "",
   date: Date.now(),
 };
  
class CreateBlogPost extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  // const handleTitle = (e) => {
  //   setTitile(e.target.value);
  // }

  // const handleTitle = (e) => {
  //   let newBlogpost = { ...blogpost };
  //   newBlogpost.title = e.target.value;
  //   setPaper(newBlogpost);
  // };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePhoto = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("image", this.state.image);
    formData.append("bodyContent", this.state.bodyContent);
    formData.append("date", this.state.date);

    axios
      .post("http://localhost:8084/api/blogposts/create", formData)
      .then((response) => {
        alert("Data Succesfully inserted");
        this.setState({
          title: "",
          bodyContent: "",
          date: Date.now(),
        });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }
//"background-image: url('../backgrounfImgs/createformbackground.jpg');"
  render() {
    return (
      <div className="page-background">
        <Navbar />
        <div className="container">
          <form
            onSubmit={this.onSubmit}
            id="blogForm"
            enctype="multipart/form-data"
          >
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
                Default file input example
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                accept=".jpg,.png,.jpeg"
                name="image"
                onChange={this.handlePhoto}
              />
            

            {/* <input
              type="file"
              accept=".jpg,.png,.jpeg"
              name="image"
              id="imgButTab"
              onChange={this.handlePhoto}
            /> */}
            </div>
            <br />

            <input
              type="textarea"
              name="bodyContent"
              value={this.state.bodyContent}
              onChange={this.onChange}
              placeholder="Enter bodyContent text"
            />
            <br />

            

            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateBlogPost;