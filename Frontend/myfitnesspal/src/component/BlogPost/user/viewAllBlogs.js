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

        {/* <div className="container">
          {this.state.data.map((data) => (
            <div className="col-md-4 animated fadeIn" key={data.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={`http://localhost:8084/${data.image}`}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h3 className="card-title">{data.name}</h3>
                  <h5 className="card-title">{data.category}</h5>
                  <h6>{data.email}</h6>
                  <button
                    className="UpdateBut"
                    onClick={(e) => this.navigateEditPage(e, data._id)}
                  >
                    Edit
                  </button>{" "}
                  <button
                    className="deleBut"
                    onClick={(e) => this.DeleteKeynote(e, data._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}

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
                      <a
                        href={`/blog/${blogs._id}`}
                        className="btn btn-primary"
                        //onClick={(e) => this.viewBlog(e, item._id)}
                      >
                        Read More..
                      </a>
                      <p className="card-text">
                        <small className="text-muted">{blogs.date.substring(0,16)}</small>
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
