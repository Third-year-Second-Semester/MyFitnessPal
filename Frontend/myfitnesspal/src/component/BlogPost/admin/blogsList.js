import axios from "axios";
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Navbar from "../../NavBar/Navbar.component";
import './bloglist.css';
import createBlogImg from "../imgs/createblog3.jpg";
import generateReportImg from "../imgs/generate-report.png";
import bloglistbackimg from "../imgs/ReportBlogcrop.jpg";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(e) {
    axios.get("http://localhost:8084/blogposts").then((response) => {
      this.setState({ blogs: response.data.data });
      console.log(response.data.data);
    });
  }

  componentDidUpdate(e) {
    axios.get("http://localhost:8084/blogposts").then((response) => {
      this.setState({ blogs: response.data.data });
    });
  }

  handleDelete(id) {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to delete this blog post..?",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            axios
              .delete(`http://localhost:8084/blogposts/delete/${id}`)
              .then((response) => {
                confirmAlert({
                  title: "Blog post successfully deleted!!",
                  buttons: [{ label: "OK" }],
                });

              })
              .catch((error) => {
                alert(error.message);
              }),
        },
        {
          label: "No",
        },
      ],
    });
  }

  render() {
    return (
      <div >
        <Navbar />

        <div className="listbackgrgound">
          <p className="title">Health Blog Management</p>

          <div className="container">
            <Link to="/blogpost/create">
              <img id="createblogbtn" src={createBlogImg} />
              <button id="addbtn">Add New Blog Post</button>
            </Link>

            <Link to="/blog/report">
              <img id="generatereportbtn" src={generateReportImg} />
              <button id="generatebtn">Generate Blogs Details Report</button>
            </Link>

            <br />
            <br />
            {this.state.blogs.length > 0 &&
              this.state.blogs.map((blogs) => (
                <div
                  className="card mb-3"
                  style={({ maxWidth: "1200px" }, { borderColor: "gray" })}
                >
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
                          {blogs.bodyContent.substring(0, 350)}
                        </p>

                        <p className="card-text">
                          <small className="text-muted">
                            posted on: {blogs.date.substring(0, 10)}
                          </small>
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

                          <button
                            //href={`/deleteblog/${blogs._id}`}
                            className="btn btn-danger"
                            onClick={() => {
                              this.handleDelete(blogs._id);
                            }}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <br />
      </div>
    );
  }
}

export default BlogsList;



