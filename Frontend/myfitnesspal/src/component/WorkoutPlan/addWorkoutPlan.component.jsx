import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/Navbar.component';
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

            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }

   

    render() {
        return (

            <div className='backStyle'>
                <NavBar></NavBar>
                <div className="booking-form" >

                    <form id="booking" onSubmit={this.onSubmit}>
                        <h1>Add New WorkOut Plan</h1>

                        <div >
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                            <input
                                type="text"
                                className="inputBoxTab"
                                placeholder="Price"
                                name="price"
                                value={this.state.price}
                                onChange={this.onChange}
                            />
                        </div><br></br>

                        <div >
                            <label>Area: </label>
                            <br></br>
                            <label>
                                <input
                                    type="radio"
                                    value = "Arms"
                                    checked = {this.state.area === "Arms"}
                                    onChange={this.handleOptionChange}
                                />
                                <span>Arms</span>
                            </label>
                            
                            <label>
                                <input
                                    type="radio"
                                    value = "Back"
                                    checked = {this.state.area === "Back"}
                                    onChange={this.handleOptionChange}
                                />
                                <span>Back</span>
                            </label>
                            
                            <label>
                                <input
                                    type="radio"
                                    value = "Chest"
                                    checked = {this.state.area === "Chest"}
                                    onChange={this.handleOptionChange}
                                />
                                <span>Chest</span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value = "Core/Abs"
                                    checked = {this.state.area === "Core/Abs"}
                                    onChange={this.handleOptionChange}
                                />
                                <span>Core/Abs</span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value = "Legs"
                                    checked = {this.state.area === "Legs"}
                                    onChange={this.handleOptionChange}
                                />
                                <span>Legs</span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value = "Full Body"
                                    checked = {this.state.area === "Full Body"}
                                    onChange={this.handleOptionChange}
                                />
                                <span>Full Body</span>
                            </label>
                        </div><br></br>

                        <div >
                            <select className="inputBox" name="level" value={this.state.level} onChange={this.onChange} >
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Experienced</option>
                            </select>
                        </div><br></br>

                        <div >
                            <textarea placeholder="Description" id="inputText" rows="5" name="description"
                                value={this.state.description} onChange={this.onChange}></textarea>
                        </div><br></br>

                        <div >
                            <textarea placeholder="Detailed Description" id="inputText" rows="10" 
                                name="detailedDescription" value={this.state.detailedDescription} 
                                onChange={this.onChange}></textarea>
                        </div><br></br>

                        <div >

                        <label>Image : </label>

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
                        <button type="submit" id="bookBut">Save</button>
                        
                        <Link to="/instructor">
                        <button id="bookButTabC">Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>

        )
    }
}

export default AddWorkoutPlan;