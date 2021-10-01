import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './paymentReport.styles.css';
import axios from 'axios';
import NavBar from '../NavBar/Navbar.component';



class WorkoutPlanReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081//workoutplans/pay')
            .then(response => {
                this.setState({ data: response.data.data });
                console.log(response.data.data);
            })
    }

    

    //Payments for workout plan Report
    generatepdf = () => {
        const doc = new jsPDF()
       // this.fetchdata()
        doc.text("Workout Plan Payments Report", 50, 10)
        doc.autoTable({ html: '#workoutplan-table' })
        doc.save('WorkoutPlanPaymentReport.pdf')
       
    }

    render() {
        return (

            <div>
                <NavBar></NavBar>
                <div id="content">
                    <br></br>
                    <center>
                    <h2>Workout Plan Payments Report</h2>
                    </center>
                    <br></br>



                    <Table striped bordered hover id="workoutplan-table" varian="dark" >
                        <thead>
                            <tr>
                                <th >First Name</th>
                                <th >Last Name</th>
                                <th >Email</th>
                                <th >Mobile No.</th>
                                <th >Workout Plan</th>
                                <th >Price</th>
                                <th >Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(data => (

                                <tr key={data.id}>
                                    <td >{data.firstName}</td>
                                    <td >{data.lastName}</td>
                                    <td >{data.email}</td>
                                    <td >{data.mobile}</td>
                                    <td >{data.plan}</td>
                                    <td >{data.price}</td>
                                    <td >{data.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>




                </div>
                <br></br>
                <button id="generateBut" onClick={this.generatepdf} type="primary">Download Report PDF</button>
            </div>

        )
    }
}

export default WorkoutPlanReport;