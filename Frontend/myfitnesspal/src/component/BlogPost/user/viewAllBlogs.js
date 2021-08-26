import React, { Component } from "react";
import Navbar from "../../NavBar/Navbar.component";
import axios from "axios";
import titleImg from "./healthblogtitle.jpg";
import './viewall.css';

class ViewAllBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      data: []
    };
  }

  componentDidMount(e) {
    axios.get("http://localhost:8084/blogposts").then((response) => {
      this.setState({ blogs: response.data.data });
      console.log(response.data.data);
    });

  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="mycontainer">
          <img id="titleImg" src={titleImg} />
          <p id="title">HEALTH BLOG</p>
        </div>

        <div className="container">
          {this.state.blogs.length > 0 &&
            this.state.blogs.map((blogs) => (
              // <div key={index} className="card mb-3">

              //</div>

              <div className="card mb-3" style={{ maxWidth: "1200px" }}>
                <div className="row g-0" key={blogs.id}>
                  <div className="col-md-4">
                    <img
                          src={`http://localhost:8084/${blogs.image}`}
                          className="img-fluid rounded-start"
                          alt=""
                        />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{blogs.title}</h5>
                      <p className="card-text">
                        {blogs.bodyContent.substring(0, 250)}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Posted on: {blogs.date.substring(0,10)}</small>
                      </p>
                      <a
                        href={`/blog/${blogs._id}`}
                        className="btn btn-primary"
                        //onClick={(e) => this.viewBlog(e, item._id)}
                      >
                        Read More..
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ViewAllBlogs;
