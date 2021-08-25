import axios from "axios";
import { Button } from "bootstrap";
import React, { Component } from "react";
import Navbar from "../../NavBar/Navbar.component";

class ViewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      
    };
  }

  componentDidMount(e, id) {
      axios.get(`http://localhost:8084/blogposts/${this.props.match.params.id}`)
        .then((response) => {
      this.setState({ blogs: response.data.data });
      

      console.log(response.data.data._id);
      console.log(this.props.match.params.id);
        });
      
  }

  render() {
    
    return (
      <div>
        <Navbar />

        <div className="container">
          <h2>{this.state.blogs.title}</h2>
          <br />
          <div>{this.state.blogs.bodyContent}</div>
          <br />
          <p>{this.state.blogs.date}</p>
          <img src={this.state.blogs.image} />
        </div>
      </div>
    );
  }
}

export default ViewBlogPost;
