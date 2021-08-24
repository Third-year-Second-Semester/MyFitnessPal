import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './addInstructor.css';
import NavBar from '../../NavBar/Navbar.component';
import axios from 'axios';


const initialState = {
    name: "",
    email: "",
    category: "",
    introduction: "",
    discription: "",
    image: ""
}

class addInstructor extends Component {
    constructor(prop) {
        super(prop);
        this.onChange = this.onChange.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlePhoto = (e) => {
        this.setState({ image: e.target.files[0]});
    }

    onSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',this.state.name);
        formData.append('email',this.state.email);
        formData.append('category',this.state.category);
        formData.append('introduction',this.state.introduction);
        formData.append('discription',this.state.discription);
        formData.append('image',this.state.image);
        /*let instructor = {
            name: this.state.name,
            email: this.state.email,
            category: this.state.category,
            introduction: this.state.introduction,
            discription: this.state.discription,
            image: this.state.image
        }*/
      //  console.log(this.state.name);
        console.log(formData);
        axios.post('http://localhost:8081/instructor/create', formData)
            .then(response => {
                alert('Data Succesfullt inserted');
                this.setState({
                    name: '',
                    email: '',
                    category: '',
                    introduction: '',
                    discription: ''
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
                                
                                onChange={this.handlePhoto}

                            />

                
                        </div><br></br>
                        <button type="submit" id="bookBut">Save</button>
                        
                        <Link to="/instructor">
                        <button id="bookButTabC">Close</button>
                        </Link>
                    </form>
                </div>
            </div>

        )
    }
}

export default addInstructor;