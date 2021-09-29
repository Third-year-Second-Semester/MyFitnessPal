import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './instructorReport.css';
import axios from 'axios';
import NavBar from '../../NavBar/Navbar.component';



class InstructorReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/instructor/')
            .then(response => {
                this.setState({ data: response.data.data });
                console.log(response.data.data);
            })
    }

    

    //Instructor Report
    generatepdf = () => {
        const doc = new jsPDF()
       // this.fetchdata()
        doc.text("Instructor Details Report", 20, 10)
        doc.autoTable({ html: '#my-table' })
        doc.save('instructor_Report.pdf')
       
    }

    render() {
        return (

            <div>
                <NavBar></NavBar>
                <div id="content">
                    <br></br>
                    <center>
                    <h2>Instructor Details Report</h2>
                    </center>
                    <br></br>



                    <Table striped bordered hover id="my-table" >
                        <thead>
                            <tr>
                                <th >Instructor Name</th>
                                <th >Email</th>
                                <th >Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(data => (

                                <tr key={data.id}>
                                    <td >{data.name}</td>
                                    <td >{data.email}</td>
                                    <td >{data.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>




                </div>
                <br></br>
                <button id="repoBut" onClick={this.generatepdf} type="primary">Download Report PDF</button>
            </div>

        )
    }
}

export default InstructorReport;