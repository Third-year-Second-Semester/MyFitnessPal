import React, {Component} from 'react';
import axios from "axios";
import Navbar from '../../NavBar/Navbar.component';
import TextEditor from "./richTextEditor";
import "./createBlog.css";
import { Editor, EditorState } from "draft-js";

const initialState = {
  title: "",
  bodyContent: EditorState.createEmpty(),
  date: "",
};

class CreateB extends Component{
    constructor(props) {
        super(props);
        this.state = { initialState }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

  onChange(e) {
    console.log("text" + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  
  onEditorChange(editorState) {
    
    this.setState({ bodyContent: editorState });
    

  }

    onSubmit(e) {
      e.preventDefault();

        let blogPost = {
          title: this.state.title,
          bodyContent: this.state.bodyContent,
          date: new Date().now,
        };

          // const formData = new FormData();
          // formData.append('title', this.state.title);
          // formData.append('bodyContent', this.state.bodyContent);
          // formData.append('date', this.state.date);

        //   .post({
        //     method: "post",
        //     url: "http://localhost:8084/api/blogposts/create",
        //     data: formData,
        //     headers: { "Content-Type": "multipart/form-data" },
        //   });

        axios
          .post('http://localhost:8084/api/blogposts/create',blogPost)
          .then((res) => {
            alert("Data added successfully");
          })
          .catch((err) => {
            console.log(err.message);
            alert(err.message);
          });
    }


  render() {
    const { editorState } = this.state;
    console.log(editorState);
        return (
          <div>
            <Navbar />
            <div>
              <form onSubmit={this.onSubmit}>
                <div className="sm-3">
                  <label for="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    required
                  />
                </div>

                <div className="sm-3">
                  <label for="title" className="form-label">
                    Body Content
                  </label>
                  {/* <input
                    type="textarea"
                    className="form-control"
                    id="bodyContent"
                    name="bodyContent"
                    value={this.state.bodyContent}
                    onChange={this.onChange}
                    required
                  /> */}

                  <TextEditor
                    name="bodyContent"
                    placeholder="string"
                    editorState={this.state.editorState}
                    onChange={this.onEditorChange}
                    
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        );
    }
}

export default CreateB;