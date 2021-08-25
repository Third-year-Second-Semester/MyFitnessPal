import axios from "axios";
import React, { Component } from "react";
import Navbar from "../../NavBar/Navbar.component";

class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };

    //this.onChange = this.onChange.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
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
          <h1>Workshop Proposals List</h1>

          <div className="container">
            <button class="btn btn-primary" style={{ padding: "8px" }}>
              Generate Blogs Details Report
            </button>
            {this.state.blogs.length > 0 &&
              this.state.blogs.map((item, index) => (
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
                       
                        <p className="card-text">
                          <small className="text-muted">{item.date}</small>
                        </p>

                        <div className="d-grid gap-2 d-md-block">
                          <a
                            href={`/adminviewblog/${item._id}`}
                            className="btn btn-primary"
                          >
                            VIEW
                          </a>

                          {"  "}

                          <a
                            href={`/editblog/${item._id}`}
                            className="btn btn-success"
                          >
                            EDIT
                          </a>

                          {"  "}

                          <a
                            href={`/deleteblog/${item._id}`}
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



