import axios from "axios";
import { Button } from "bootstrap";
import React, { Component } from "react";
import Navbar from "../../NavBar/Navbar.component";
import "./viewblogpost.css";

class ViewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      date: ""
      
    };
  }

  componentDidMount(e, id) {
      axios.get(`http://localhost:8084/blogposts/${this.props.match.params.id}`)
        .then((response) => {
      this.setState({ blogs: response.data.data });
      this.setState({ date: this.state.blogs.date });

      console.log(response.data.data._id);
      console.log(this.props.match.params.id);
        });
      
  }

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
        </div>
      </div>
    );
  }
}

export default ViewBlogPost;
