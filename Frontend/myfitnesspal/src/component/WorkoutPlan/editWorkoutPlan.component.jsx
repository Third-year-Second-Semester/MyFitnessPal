import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/Navbar.component';
import './editWorkoutPlan.styles.css';

class EditWorkoutPlan extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            area: '',
            level: '',
            price: '',
            description: '',
            detailedDescription: '',
            imgUrl: ''

        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/api/workoutplans/${this.props.match.params.id}`)
            .then(response => {
                
                this.setState({
                    id: response.data.data._id,
                    name: response.data.data.name,
                    area: response.data.data.area,
                    level: response.data.data.level,
                    description: response.data.data.description,
                    price: response.data.data.price,
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

    onSubmit(e) {
        e.preventDefault();
        let workoutPlan = {
            _id:this.state.id,
            name: this.state.name,
            email: this.state.email,
            category:this.state.category,
            introduction:this.state.introduction,
            discription:this.state.discription
        }
        axios.put(`http://localhost:8081/api/workoutplans/${this.state.id}`, workoutPlan)
        .then(response =>{
            alert('Instructor Details updated');
            console.log(this.state.id);
            window.location = `/workoutplan`
        })
        .catch(error =>{
            console.log(error.message);
            alert(error.message);
        })
    }

    render() {
        return (

            <div className='eworkPlan-background'>
                <NavBar></NavBar>
                <div className="eworkplan-form" >

                    <form id="eworkoutplan" onSubmit={this.onSubmit}>
                        <h1>Add New Workout Plan</h1>
                        <br></br>
                        <div >
                            <input
                                type="text"
                                className="ewPlan-inputBox"
                                placeholder="Plan Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                            
                        </div><br></br>

                        <h4 className= "ewPtext"><b>Details:</b></h4>
                        <br></br>

                        <label className = "ewParea">Area: </label>
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
                            <select className="ewPlan-inputBox1" name="level" value={this.state.level} onChange={this.onChange} >
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Experienced</option>
                            </select>
                            <input
                                type="text"
                                className="ewPlan-inputBox2"
                                placeholder="Price"
                                name="price"
                                value={this.state.price}
                                onChange={this.onChange}
                            />
                        </div><br></br>

                        <div >
                            <textarea placeholder="Description" id="ewPlan-inputText" rows="3" name="description"
                                value={this.state.description} onChange={this.onChange}></textarea>
                        </div><br></br>

                        <div >
                            <textarea placeholder="Detailed Description" id="ewPlan-inputText" rows="5" 
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

export default EditWorkoutPlan;