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
      data: [],
      search: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.renderBlogs = this.renderBlogs.bind(this);
    this.searchBlog = this.searchBlog.bind(this);
  }

  componentDidMount(e) {
    axios.get("http://localhost:8084/blogposts").then((response) => {
      this.setState({ blogs: response.data.data });
      console.log(response.data.data);
    });
  }

  // handle search function implementation
  handleSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }

  //search blog function implementation
  searchBlog(e) {
    e.preventDefault();
    this.renderBlogs(this.state.search);
  }

  // render blog function implementation
  renderBlogs(blogs) {
    const { search } = this.state;

    // if (
    //   search !== "" &&
    //   blogs.title.toLowerCase().indexOf(search.toLowerCase()) === -1
    // ) {
    //   return null;
    // }

    // return statement of the function
    return (
      <div>
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
                  <small className="text-muted">
                    Posted on: {blogs.date.substring(0, 10)}
                  </small>
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
      </div>
    );
  }

  render() {
    const { search } = this.state;
    const filteredBlogs = this.state.blogs.filter((blogpost) => {
      return blogpost.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <Navbar />

        <div className="mycontainer">
          <img id="titleImg" src={titleImg} />
          <p id="title">HEALTH BLOG</p>
        </div>

        <div className="container">
          <br />
          {/* search bar */}

          
            <input
              class="form-control me-2 searchbar"
              type="search"
              value={this.state.search}
              onChange={this.handleSearch}
              placeholder="Search Blog"
              aria-label="Search"
            />
          
          <br />

          <div className="card mb-3">
            {filteredBlogs.map((blogpost) => {
              return this.renderBlogs(blogpost);
            })}

            {/* {this.state.blogs.map((blogpost) => {
              return this.renderBlogs(blogpost);
            })} */}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewAllBlogs;
