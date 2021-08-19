import React, { Component } from 'react';
import './addInstructor.css';
import NavBar from '../../NavBar/Navbar.component';
import axios from 'axios';


const initialState = {
    name: "",
    email: "",
    category: "",
    introduction: "",
    discription: "",
    image: "url"
}

class addInstructor extends Component {
    constructor(prop) {
        super(prop);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let instructor = {
            name: this.state.name,
            email: this.state.email,
            category: this.state.category,
            introduction: this.state.introduction,
            discription: this.state.discription,
            image: this.state.image
        }
        console.log(instructor);
        axios.post('http://localhost:8081/instructor/create', instructor)
            .then(response => {
                alert('Data Succesfullt inserted');
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
                        <h1>Add New Instructor</h1>
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
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />

                            

                        </div><br></br>

                        <div >
                        <select className="inputBox" name="category" value={this.state.category} onChange={this.onChange} >
                                <option>Yoga Teacher</option>
                                <option >Movement Coach</option>
                                <option>Ski Coach</option>
                            </select>
                        </div><br></br>

                        <div >
                            <textarea placeholder="Introduction" id="inputText" rows="7" name="introduction"
                                value={this.state.introduction} onChange={this.onChange}></textarea>
                        </div><br></br>

                        <div >
                            <textarea placeholder="Discription" id="inputText" rows="7" name="discription" value={this.state.discription} onChange={this.onChange}></textarea>
                        </div><br></br>

                        <div >

                        <label>Profile Picture : </label>

                        <input
                                type="file"
                                accept=".jpg,.png,.jpeg"
                                name="image"
                                id="imgButTab"

                            />

                
                        </div><br></br>
                        <button type="submit" id="bookBut">Save</button>
                        <button id="bookButTab">Clear</button>
                        <button id="bookButTabC">Cancel</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default addInstructor;