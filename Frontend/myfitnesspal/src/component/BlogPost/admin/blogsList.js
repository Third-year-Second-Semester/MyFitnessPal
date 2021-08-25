import axios from "axios";
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Navbar from "../../NavBar/Navbar.component";
import './bloglist.css';

class BlogsList extends Component {
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

          <p className="title">Health Blog Management</p>

          <div className="container">
            <Link to="/blogpost/create">
              <button id="addbtn">Add New Blog Post</button>
            </Link>

            <Link>
              <button id="generatebtn">Generate Blogs Details Report</button>
            </Link>

            <br />
            <br />
            {this.state.blogs.length > 0 &&
              this.state.blogs.map((blogs) => (
                <div className="card mb-3" style={{ maxWidth: "1200px" }}>
                  <div className="row g-0" key={blogs._id}>
                    <div className="col-md-4">
                      <img
                        src={`http://localhost:8084/${blogs.image}`}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{blogs.title}</h5>
                        <p className="card-text">
                          {blogs.bodyContent.substring(0, 250)}
                        </p>

                        <p className="card-text">
                          <small className="text-muted">{blogs.date}</small>
                        </p>

                        <div className="d-grid gap-2 d-md-block">
                          <a
                            href={`/adminviewblog/${blogs._id}`}
                            className="btn btn-primary"
                          >
                            VIEW
                          </a>

                          {"  "}

                          <a
                            href={`/editblog/${blogs._id}`}
                            className="btn btn-success"
                          >
                            EDIT
                          </a>

                          {"  "}

                          <a
                            href={`/deleteblog/${blogs._id}`}
                            className="btn btn-danger"
                          >
                            DELETE
                          </a>
                        </div>
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

export default BlogsList;



