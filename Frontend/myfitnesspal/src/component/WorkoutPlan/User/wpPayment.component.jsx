import React, { useState } from "react";
import { Link , useLocation} from "react-router-dom";
import UserNavBar from '../../UserNavBar/UserNavBar';
import axios from 'axios';
import './userPayment.styles.css';

const WorkoutPlanPayment =(props)=> {

    
    const initialState = {
        firstName:"",
        lastName:"",
        email:"",
        mobile:"",
        plan: "",
        price: "",
        cardNo:"",
        expDate:"",
        cvv:""
    }
    const [state, setState] = useState(initialState);
    const location = useLocation();
    console.log(location);

    const onChange =(e) => {
        setState({ [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const workoutPlanPay = new FormData();
        
        workoutPlanPay.append('firstName', state.firstName);
        workoutPlanPay.append('lastName', state.lastName);
        workoutPlanPay.append('email', state.email);
        workoutPlanPay.append('mobile', state.mobile);
        workoutPlanPay.append('plan', location.state.name);
        workoutPlanPay.append('price', location.state.price);
        workoutPlanPay.append('cardNo', state.cardNo);
        workoutPlanPay.append('expDate', state.expDate);
        workoutPlanPay.append('cvv', state.cvv);

        axios.post('http://localhost:8081/api/workoutplan/pay', workoutPlanPay,
            {
                headers: { 'Content-Type':  'multipart/form-data' }
            }
        )
            .then(response => {
                alert('Data Succesfully inserted');
                this.setState({
                    firstName:"",
                    lastName:"",
                    email:"",
                    mobile:"",
                    plan: "",
                    price: "",
                    cardNo:"",
                    expDate:"",
                    cvv:""
                  });
                  window.location = `/viewworkoutplans`

            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }

    
        return(
            <div className="wpUserPayment">
                <UserNavBar></UserNavBar>
            <div className="justify-content-center">
                <div className="container">
                <div className="row">
                <form className="row g-3" onSubmit={onSubmit}>
                    <h1 className="wp-pay-title">Purchase Your Workout Plan Now!</h1>
                    <div class="col-md-6">
                        <input 
                            type="text" 
                            class="form-control wpinput1" 
                            id="inputEmail4" 
                            placeholder="First Name"
                            onChange={onChange}
                            />
                    </div>
                    <div class="col-md-6">
                        <input 
                            type="text" 
                            class="form-control wpinput1" 
                            id="inputPassword4" 
                            placeholder="Last Name"
                            onChange={onChange}
                            />
                    </div>
                    <div class="col-12">
                        <input 
                            type="text" 
                            class="form-control wpinput2" 
                            id="inputAddress" 
                            placeholder="Email"
                            onChange={onChange}
                            />
                    </div>
                    <div class="col-12">
                        <input 
                            type="text" 
                            class="form-control wpinput2" 
                            id="inputAddress2" 
                            placeholder="Mobile Number"
                            onChange={onChange}
                            />
                    </div>
                    <div class="col-md-6">
                        <label for="basic-url" class="form-label">Workout Plan</label><br/>
                        <input 
                            type="text" 
                            class="form-control wpinput1" 
                            id="inputEmail4" 
                            value={location.state.name} 
                            disabled/>
                    </div>
                        <div class="col-md-6">
                            <label for="basic-url" class="form-label">Price</label><br/>
                            <input 
                                type="text" 
                                class="form-control wpinput1" 
                                id="inputEmail4" 
                                value={location.state.price} 
                                disabled/>
                        </div>
                    <div class="col-12">
                        <input 
                            type="text" 
                            class="form-control wpinput2" 
                            id="inputAddress2" 
                            placeholder="Card Number"
                            onChange={onChange}/>
                    </div>
                    <div class="col-md-6">
                        <input 
                            type="text" 
                            class="form-control wpinput1" 
                            id="inputEmail4" 
                            placeholder="Exp. Date"
                            onChange={onChange}/>
                    </div>
                    <div class="col-md-6">
                        <input 
                            type="text" 
                            class="form-control wpinput1" 
                            id="inputPassword4" 
                            placeholder="CVV"
                            onChange={onChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div className="text-center">
                        <button type="submit" class="btn btn-primary wpbtn">Pay Now</button>
                        <Link to='/viewworkoutplans'>
                        <button type="button" class="btn btn-danger wpbtn">Cancel</button>
                        </Link>
                    </div>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        )

    
}

export default WorkoutPlanPayment;