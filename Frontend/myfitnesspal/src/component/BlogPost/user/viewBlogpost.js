import axios from "axios";
import { Button } from "bootstrap";
import React, { Component } from "react";
import Navbar from "../../NavBar/Navbar.component";
//import { confirmAlert } from "react-confirm-alert";
//import "react-confirm-alert/src/react-confirm-alert.css";

class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };

    //this.navigateSubjectPage = this.navigateSubjectPage.bind(this);
    //this.onChange = this.onChange.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  componentDidMount(e) {
    axios.get("http://localhost:8084/api/blogposts").then((response) => {
      this.setState({ blogs: response.data.data });
      console.log(response.data.data);
    });
  }

  //   onChange(e) {
  //     this.setState({ status: e.target.value });
  //     console.log("status: " + status);
  //   }

  onChangeStatus(e, id) {
    // confirmAlert({
    //   title: "Confirm to Accept",
    //   message: "Are you sure to Accept this Workshop Proposal..?",
    //   buttons: [
    //     {
    //       label: "Yes",
    //       onClick: () =>
    //         axios
    //           .put(`http://localhost:5000/workshop-proposal/status/${id}`)
    //           .then((response) => {
    //             //alert('keynote Succesfully approved');
    //             //console.log(this.state.id);
    //             window.location = `/workshop/proposal-list`;
    //           })
    //           .catch((error) => {
    //             alert(error.message);
    //           }),
    //     },
    //     {
    //       label: "No",
    //     },
    //   ],
    // });
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
              <div key={index} className="card mb-3">
                <div className="p-3">
                  <h4>Title: {item.title}</h4>
                  <h5>body: {item.body}</h5>
                  <h5>Date: {item.date}</h5>

                  <div className="d-grid gap-2 d-md-block">
                    <button type="button" className="btn btn-primary">
                      VIEW
                    </button>
                    
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
