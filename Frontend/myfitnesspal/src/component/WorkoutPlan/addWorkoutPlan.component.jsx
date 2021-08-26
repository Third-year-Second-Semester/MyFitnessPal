import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/Navbar.component';
import './addWorkoutPlan.styles.css';
import axios from 'axios';


const initialState = {
    name: "",
    level: "Beginner",
    area: "",
    description: "",
    detailedDescription: "",
    price: "",
    imgUrl: ""
}

class AddWorkoutPlan extends Component {
    constructor(prop) {
        super(prop);
        this.onChange = this.onChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleOptionChange(e) {
        this.setState({
          area: e.target.value
        });
      }

    handlePhoto = (e) => {
        this.setState({ image: e.target.files[0]});
    }

    onSubmit(e) {
        e.preventDefault();
        let workoutPlan = {
            name: this.state.name,
            area: this.state.area,
            level: this.state.level,
            price: this.state.price,
            description: this.state.description,
            detailedDescription: this.state.detailedDescription,
            imgUrl: this.state.imgUrl
        }

        console.log(workoutPlan);

        axios.post('http://localhost:8081/api/workoutplans', workoutPlan)
            .then(response => {
                alert('Data Succesfully inserted');
                this.setState({
                    name: '',
                    area: '',
                    level: '',
                    price: '',
                    description: '',
                    detailedDescription: '',
                    imgUrl: ''
                  });
                  window.location = `/workoutplan`

            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }

   

    render() {
        return (

            <div className='workPlan-background'>
                <NavBar></NavBar>
                <div className="workplan-form" >

                    <form id="workoutplan" onSubmit={this.onSubmit}>
                        <h1>Add New Workout Plan</h1>
                        <br></br>
                        <div >
                            <input
                                type="text"
                                className="wPlan-inputBox"
                                placeholder="Plan Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                            
                        </div><br></br>

                        <h4 className= "wPtext"><b>Details:</b></h4>
                        <br></br>

                        <label className = "wParea">Area: </label>
                        <div >
                            
                            <table>
                                <td>
                                    <tr>
                                        <label>
                                            <input
                                                type="radio"
                                                value = "Arms"
                                                checked = {this.state.area === "Arms"}
                                                onChange={this.handleOptionChange}
                                            />
                                            <span> Arms</span>
                                        </label>
                                    </tr>
                            
                                    <tr>
                                        <label>
                                            <input
                                                type="radio"
                                                value = "Back"
                                                checked = {this.state.area === "Back"}
                                                onChange={this.handleOptionChange}
                                            />
                                            <span> Back</span>
                                        </label>
                                    </tr>
                            
                                    <tr>
                                        <label>
                                            <input
                                                type="radio"
                                                value = "Chest"
                                                checked = {this.state.area === "Chest"}
                                                onChange={this.handleOptionChange}
                                            />
                                            <span> Chest</span>
                                        </label>
                                    </tr>
                            
                            </td>

                            <td>
                                <tr>
                                    <label>
                                        <input
                                            type="radio"
                                            value = "Core/Abs"
                                            checked = {this.state.area === "Core/Abs"}
                                            onChange={this.handleOptionChange}
                                        />
                                        <span> Core/Abs</span>
                                    </label>
                                </tr>

                                <tr>
                                    <label>
                                        <input
                                            type="radio"
                                            value = "Legs"
                                            checked = {this.state.area === "Legs"}
                                            onChange={this.handleOptionChange}
                                        />
                                        <span> Legs</span>
                                    </label>
                                </tr>

                                <tr>
                                    <label>
                                        <input
                                            type="radio"
                                            value = "Full Body"
                                            checked = {this.state.area === "Full Body"}
                                            onChange={this.handleOptionChange}
                                        />
                                        <span> Full Body</span>
                                    </label>
                                </tr>   
                                </td>
                            </table>
                            
                        </div><br></br><br></br>

                        <div >
                            <span>Level:  </span>
                            <select className="wPlan-inputBox1" name="level" value={this.state.level} onChange={this.onChange} >
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Experienced</option>
                            </select>
                            <input
                                type="text"
                                className="wPlan-inputBox2"
                                placeholder="Price"
                                name="price"
                                value={this.state.price}
                                onChange={this.onChange}
                            />
                        </div><br></br>

                        <div >
                            <textarea placeholder="Description" id="wPlan-inputText" rows="3" name="description"
                                value={this.state.description} onChange={this.onChange}></textarea>
                        </div><br></br>

                        <div >
                            <textarea placeholder="Detailed Description" id="wPlan-inputText" rows="5" 
                                name="detailedDescription" value={this.state.detailedDescription} 
                                onChange={this.onChange}></textarea>
                        </div><br></br>

                        <div >

                    

                        {/* <input
                                type="file"
                                accept=".jpg,.png,.jpeg"
                                name="image"
                                id="imgButTab"
                                
                                onChange={this.handlePhoto}

                            /> */}
                            <input
                                type="text"
                                className="inputBoxTab"
                                placeholder="Image"
                                name="imgUrl"
                                value={this.state.imgUrl}
                                onChange={this.onChange}
                            />

                
                        </div><br></br>

                        
                        <button type="submit" id="saveButton">Save</button>
                        
                        
                        <Link to="/workoutplan">
                        <button id="cancelButton">Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>

        )
    }
}

export default AddWorkoutPlan;