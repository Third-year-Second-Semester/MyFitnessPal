import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserNavBar from '../../UserNavBar/UserNavBar';
import axios from 'axios';


const initialState = {
    name: "",
    level: "",
    area: "",
    description: "",
    detailedDescription: "",
    price: "",
    imgUrl: ""
}

class WorkoutPlanPayment extends Component {
    constructor() {
        super();
    }
    render() {
        const {state} = this.props.location;
        return(
            <div>
                <form >
                    <div className="form-row">
                        <div class="form-group col-md-6">
                        <input type="text" class="form-control" id="inputEmail4" placeholder="First Name"/>
                        </div>
                        <div class="form-group col-md-6">
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="inputAddress" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" id="inputAddress2" placeholder="Mobile Number"/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="basic-url" class="form-label">Workout Plan</label>
                            <label for="basic-url" class="form-label">{state.name}</label>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="basic-url" class="form-label">Price</label>
                            <label for="basic-url" class="form-label">{state.price}</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" id="inputAddress2" placeholder="Card Number"/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Exp. Date"/>
                        </div>
                        <div class="form-group col-md-6">
                        <input type="number" class="form-control" id="inputPassword4" placeholder="CVV"/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Pay Now</button>
                    <button type="button" class="btn btn-primary">Cancel</button>
                    </form>
            </div>
        )

    }
}

export default WorkoutPlanPayment;