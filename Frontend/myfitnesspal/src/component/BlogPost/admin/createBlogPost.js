import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../../NavBar/Navbar.component';
import TextEditor from './richTextEditor';
import './createBlog.css';
import { convertFromRaw, convertToRaw, Editor, EditorState } from "draft-js";

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
    //this.onEditorChange = this.onEditorChange.bind(this);
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

  // onEditorChange(bodyContent) {
  //   // let contentState = this.state.editorState.getCurrentContent();
  //   // console.log(contentState);
  //   this.setState({ bodyContent: bodyContent });
  // }

  onSubmit = (e) => {
    e.preventDefault();

    // let contentState = this.state.editorState.getCurrentContent();
    // let contents = EditorState.convertToRaw(contentState);
    //this.state.bodyContent = JSON.stringify(contents);

    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("bodyContent", this.state.bodyContent);
    formData.append("date", Date.now());
    formData.append("image", this.state.image);

    console.log(formData);
    axios
      .post("http://localhost:8084/blogposts/create", formData)
      .then((response) => {
        alert("Data Succesfully inserted");

        // <div class="alert alert-success d-flex align-items-center" role="alert">
        // <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill"/></svg>
        //   <div>
        //   An example success alert with an icon
        //   </div>
        // </div>
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
    // let contentState = this.state.bodyContent.getCurrentContent();
    // const raw = convertToRaw(contentState);
    // console.log("raw" + raw);
    // const content = JSON.stringify(raw);
    // console.log("json " + content);
    return (
      <div className="img-fluid">
        <Navbar />
        <div className="createContainer">
          <p class="form-header">CREATE NEW BLOGPOST</p>
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
                BlogPost Image:
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
              >

              </textarea>
            </div>
              {/* <input
                className="form-control"
                type="textarea"
                name="bodyContent"
                rows="5"
                value={this.state.bodyContent}
                onChange={this.onChange}
                placeholder="Enter body Content text"
              /> */}

              {/* <br />
              <TextEditor
                name="bodyContent"
                placeholder="Enter text"
                editorState={this.state.bodyContent}
                onChange={this.onEditorChange}
              />
              <br /> */}
            
            {/* <div>{JSON.stringify(convertToRaw(this.state.bodyContent.getCurrentContent()))}</div> */}

            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateBlogPost;