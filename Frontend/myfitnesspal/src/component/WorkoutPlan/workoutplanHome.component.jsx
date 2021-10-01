import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/Navbar.component';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './workoutplanHome.styles.css';

class ManageWorkoutPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/workoutplans')
            .then(response => {
                this.setState({ data: response.data.data });
                console.log(response.data.data);
            })
    }

    deleteWorkoutPlan(e, planId) {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => axios.delete(`http://localhost:8081/api/workoutplans/${planId}`)
                        .then(response => {

                            //alert('Delete Success..!');
                            window.location = `/workoutplan`
                        })
                        .catch(error => {
                            alert(error.message);
                        })

                },
                {
                    label: 'No'

                }
            ]
        });
    }

    navigateEditPage(e, planId) {
        window.location = `/workoutplan/${planId}`
    }

    render() {
        return (
            <div className="clearfix">
                <NavBar></NavBar>
                <br></br>
                
                <h1 className="pagetitle">Manage Workout Plans</h1>
                
                <br></br>
                <div className='wp-homebackStyle'>
                    <Link to="/workoutplan/add">
                        <button className="wp-addBut">+ Add Workout Plan</button>
                    </Link>
                    <Link to="/workoutplanReport">
                        <button className="wp-repBut">Payment Report</button>
                    </Link>
                </div>
                <br></br>
                <div className="row">
                    {this.state.data.map(data => (
                        <div className="col-md-4 animated fadeIn" key={data.id}>
                            <div className="wp-card">
                                <div className="wp-card-body">
                                    <div className="wp-avatar">
                                        <img
                                            src={`http://localhost:8081/${data.imgUrl}`}
                                            alt =""
                                            className="card-img-top"
                                            width = "600"
                                            height = "400"
                                        />
                                    </div>

                                    <h3 className="wp-card-title">
                                        {data.name}
                                    </h3>

                                    <button className="wp-UpdateBut" onClick={e => this.navigateEditPage(e, data._id)}>Update Plan</button> 
                                    <button className="wp-deleBut" onClick={e => this.deleteWorkoutPlan(e, data._id)}>Delete Plan</button>
  
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        );
    }
}

export default ManageWorkoutPlans;