import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserNavBar from '../../UserNavBar/UserNavBar';
import './userdetailWP.styles.css';
import axios from 'axios';

const initialState = {
            id:'',
            name: '',
            area: '',
            level: '',
            price: '',
            description: '',
            detailedDescription: '',
            imgUrl: ''
}

class WorkoutPlanDetail extends Component {
    constructor(prop) {
        super(prop);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/api/workoutplans/${this.props.match.params.id}`)
            .then(response => {
                
                this.setState({
                    id: response.data.data._id,
                    name: response.data.data.name,
                    area: response.data.data.area,
                    level: response.data.data.level,
                    price: response.data.data.price,
                    description: response.data.data.description,
                    detailedDescription: response.data.data.detailedDescription,
                    imgUrl: response.data.data.imgUrl
                });
                console.log(response.data.data._id);
                console.log(this.props.match.params.id);
            })
            .catch(error => {
                alert(error.message)
            })

    }

    navigateToPayment(e, planId){
        window.location('/');
    }

    render() {
        return (
            <div className="wpUserDetail">
                <UserNavBar></UserNavBar>
                <br></br>
                <br></br>
                <div className="container wp">
                    <div className="row wprow">
                        <div className="col wpimageholder">
                        <img
                                                src={`http://localhost:8081/${this.state.imgUrl}`}
                                                alt =""
                                                className="wpImage"
                                            />
                        </div>
                        <div className="col offset-2 wpcol">
                            <h1>{this.state.name}</h1>
                            <br></br>
                            <p>{this.state.description}</p>
                            <br></br>
                            <p>Level : {this.state.level}</p>
                            <br/>
                            <p>Price : Rs. {this.state.price}.00</p>
                            <button className="wpUserHome-addBut" onClick={e => this.navigateToPayment(e, this.state.id)}>BUY NOW</button>
                            <button className="wpUserHome-addBut">LEARN MORE</button>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-6 wpcol-6">
                            <h3>Description</h3>
                            <br></br>
                            <p>{this.state.detailedDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default WorkoutPlanDetail;