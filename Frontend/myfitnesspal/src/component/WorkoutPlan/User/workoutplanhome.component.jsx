import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserNavBar from '../../UserNavBar/UserNavBar';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './userHomeWP.styles.css';

class WorkoutPlansHome extends Component {
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

    navigateWorkoutPlan(e, planId) {
        window.location = `/detailedworkoutplan/${planId}`
    }

    filterWorkoutPlans(e, area) {
        
    }

    render() {
        return (
            <div className="wpUserHome">
                <UserNavBar></UserNavBar>
                
                
                <div className="wpUserHome-heading">
                    <h1 className="wpUserHome-pagetitle">Workout Plans</h1>
                </div>
                
                
                <br></br>
                <div class="text-center">
                    <div className='btn-group wpUserHome-homebackStyle'>
                        <button type="button" className=" btn btn-secondary wpUserHome-addBut" onClick={e => this.filterWorkoutPlans(e,'Core/Abs')}>
                            Core Exercises
                        </button>
                        <button type="button" className=" btn btn-secondary wpUserHome-addBut"onClick={e => this.filterWorkoutPlans(e,'Chest')}>Chest Exercises</button>
                        <button type="button" className=" btn btn-secondary wpUserHome-addBut"onClick={e => this.filterWorkoutPlans(e,'Leg')}>Leg Exercises</button>
                        <button type="button" className=" btn btn-secondary wpUserHome-addBut"onClick={e => this.filterWorkoutPlans(e,'Back')}>Back Exercises</button>
                        <button type="button" className=" btn btn-secondary wpUserHome-addBut"onClick={e => this.filterWorkoutPlans(e,'Arm')}>Arm Exercises</button>
                    </div>
                </div>
                <br></br>
                <div className="wpUserHome-row">
                    {this.state.data.map(data => (
                        <div className="col-md-4 animated fadeIn" key={data.id}>
                            <div className="wpUserHome-card" onClick={e => this.navigateWorkoutPlan(e, data._id)}>
                                <div className="wpUserHome-card-body">
                                    <div className="wpUserHome-avatar">
                                        <img
                                            src={`http://localhost:8081/${data.imgUrl}`}
                                            alt =""
                                            className="card-img-top"
                                        />
                                    </div>

                                    <h3 className="wpUserHome-card-title">
                                        {data.name}
                                    </h3>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        );
    }
}

export default WorkoutPlansHome;