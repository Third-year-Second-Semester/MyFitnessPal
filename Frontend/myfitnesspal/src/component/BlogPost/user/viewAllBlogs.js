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
            this.state.blogs.map((item) => (
              // <div key={index} className="card mb-3">

              //</div>

              <div className="card mb-3" style={{ maxWidth: "1200px" }}>
                <div className="row g-0" key={item.id}>
                  <div className="col-md-4">
                    <img
                      src="./workoutafterbreak.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        {item.bodyContent.substring(0, 250)}
                      </p>
                      <a
                        href={`/blog/${item._id}`}
                        className="btn btn-primary"
                        //onClick={(e) => this.viewBlog(e, item._id)}
                      >
                        Read More..
                      </a>
                      <p className="card-text">
                        <small className="text-muted">{item.date}</small>
                      </p>
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
