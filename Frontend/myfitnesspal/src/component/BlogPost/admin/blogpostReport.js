import React, { Component } from "react";
import { Table } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import NavBar from "../../NavBar/Navbar.component";
import './bloglist.css';

class Blogpostreport extends Component{
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        
        axios.get("http://localhost:8084/blogposts/")
            .then(response => {
                this.setState({ blogs: response.data.data });
        })
    }

    generatePDF = () => {
        const doc = new jsPDF();
        doc.autoTable({ html: "#my-table" });
        doc.text("Blogpost Details Report", 20, 10);
        doc.save('blogpst_details_report.pdf');
        
    }

    

    render() {
        return (
          <div id="reportback">
            <NavBar></NavBar>
            <br />

            <p className="reporttitle">BlogPost Report</p>
            <br />
            <div className="container">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr id="tb-row">
                    <th style={{ width: "100px" }}>Blogpost Title</th>
                    <th style={{ width: "700px" }}>Blogpost Content</th>
                    <th style={({ width: "100px" }, { padding: "10px" })}>
                      Posted Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.blogs.map((blog) => (
                    <tr key={blog._id}>
                      <td>{blog.title}</td>
                      <td>{blog.bodyContent.substring(0, 450)}</td>
                      <td>
                        Date: {blog.date.substring(0, 10)} Time:{" "}
                        {blog.date.substring(11, 16)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <br />
              <br />

                <button onClick={this.generatePDF} className="reportbtn">
                Download Report
              </button>

              
            </div>
          </div>
        );
    }
}

export default Blogpostreport;
