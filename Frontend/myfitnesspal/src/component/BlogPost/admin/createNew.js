import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./addBlog.css";
import NavBar from "../../NavBar/Navbar.component";
import axios from "axios";

const initialState = {
  title: "",
  body: "",
  date: new Date().now,
};

class CreateNew extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    //this.handlePhoto = this.handlePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

//   handlePhoto = (e) => {
//     this.setState({ image: e.target.files[0] });
//   };

    onSubmit = (e) => {
        
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", this.state.title);
      formData.append("body", this.state.body);
      formData.append("date", this.state.date);
    


    axios
      .post("http://localhost:8084/api/blogposts/createb", formData)
      .then((response) => {
        alert("Data Succesfully inserted");
        this.setState({
          title: "",
          body: "",
          date: new Date().now
          
        });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    return (
      <div className="backStyle">
        <NavBar></NavBar>
        <div >
          <form onSubmit={this.onSubmit}>
            <h1>Add New BlogPost</h1>
            <div>
              <input
                type="text"
                className="inputBox"
                placeholder="title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>

            <br></br>

            <div>
              <textarea
                className="inputBox"
                placeholder="Introduction"
                name="body"
                value={this.state.body}
                onChange={this.onChange}
              ></textarea>
            </div>

            <br></br>
            <button type="submit" >
              Save
            </button>

            
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNew;
