import React, { Component } from 'react';
import UserNavBar from '../../UserNavBar/UserNavBar';
import axios from 'axios';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './userHomeWP.styles.css';

class WorkoutPlansHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/workoutplans')
            .then(response => {
                this.setState({ data: response.data.data,
                    filteredData: response.data.data
                 });
                console.log(response.data.data);
            })
    }

    navigateWorkoutPlan(e, planId) {
        window.location = `/detailedworkoutplan/${planId}`
    }

    filterWorkoutPlans(e, area) {
        const {data} = this.state;
        const result = data.filter(data => data.area.includes(area));
        if(result.length > 0) {
            this.setState({filteredData:result});
        } else {
            this.setState({filteredData:data});
        }

    }


    render() {
        const {data, filteredData} = this.state;
        return (
            
            <div className="wpUserHome">
                <UserNavBar></UserNavBar>
                
                
                <div className="wpUserHome-heading">
                    <h1 className="wpUserHome-pagetitle">Workout Plans</h1>
                </div>
                
                
                <br></br>
                <div className="text-center">
                    <div className='btn-group wpUserHome-homebackStyle'>
                        <button type="button" value="Core/Abs" className=" btn btn-secondary wpUserHome-addBut" onClick={e => this.filterWorkoutPlans(e,e.target.value)}>
                            Core Exercises
                        </button>
                        <button type="button" value="Chest" className=" btn btn-secondary wpUserHome-addBut"onClick={e => this.filterWorkoutPlans(e,e.target.value)}>Chest Exercises</button>
                        <button type="button" value="Leg" className=" btn btn-secondary wpUserHome-addBut"onClick={e => this.filterWorkoutPlans(e,e.target.value)}>Leg Exercises</button>
                        <button type="button" value="Back" className=" btn btn-secondary wpUserHome-addBut"onClick={e => this.filterWorkoutPlans(e,e.target.value)}>Back Exercises</button>
                        <button type="button" value="Arm" className=" btn btn-secondary wpUserHome-addBut"onClick={e => this.filterWorkoutPlans(e,e.target.value)}>Arm Exercises</button>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    {filteredData.map(data => (
                        <div className="col-md-4 animated fadeIn" key={data._id}>
                            <div className="wpUserHome-card" onClick={e => this.navigateWorkoutPlan(e, data._id)}>
                                <div className="wpUserHome-card-body">
                                    <div className="wpUserHome-avatar">
                                        <img
                                            src={`http://localhost:8081/${data.imgUrl}`}
                                            alt ="Workout Plan"
                                            height="400"
                                            width="200"
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