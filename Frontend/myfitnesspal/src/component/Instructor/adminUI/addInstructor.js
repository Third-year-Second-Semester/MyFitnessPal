import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import './addInstructor.css';
import NavBar from '../../NavBar/Navbar.component';
import axios from 'axios';


const initialState = {
    name: "",
    email: "",
    category: "Yoga Teacher",
    introduction: "",
    discription: "",
    image: "",
    errors: {}
}

class addInstructor extends Component {
    constructor(prop) {
        super(prop);
        this.onChange = this.onChange.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.state = initialState
    }

    //form validation
    handleValidation() {

        let errors = {};
        let formIsValid = true;
        //name
        if(!this.state.name){
            formIsValid = false;
            errors["name"] = "Name Cannot be Empty.!";
         }

         if(typeof this.state.name !== "undefined"){
            if(!this.state.name.match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["name"] = "Only letters";
            }        
         }

        //Email
        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "Email Cannot be Empty.!";
        }

        if(typeof this.state.email !== "undefined"){
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Email is not valid";
             }
        }  

        //Introduction
        if (!this.state.introduction) {
            formIsValid = false;
            errors["introduction"] = "Introduction Cannot be Empty.!";
        }

        //discription
        if (!this.state.discription) {
            formIsValid = false;
            errors["discription"] = "Discription Cannot be Empty.!";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlePhoto = (e) => {
        this.setState({ image: e.target.files[0] });
    }

    onSubmit(e) {
        e.preventDefault();
        //form validation
        if(!this.handleValidation()){
            //alert("Form has Errors..!");
            confirmAlert({
                title: 'Form has Input Errors.!',
                message: 'Please Recheck Your Inputs..!',
                buttons: [
                    {
                        label: 'OK',
                        
                    }
                ]
            });
         }
        //this.handleValidation();
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('category', this.state.category);
        formData.append('introduction', this.state.introduction);
        formData.append('discription', this.state.discription);
        formData.append('image', this.state.image);
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
                //alert('Data Succesfully inserted');
                confirmAlert({
                    title: 'Data Succesfully Inserted..!',
                    buttons: [
                        {
                            label: 'OK',
                            
                        }
                    ]
                });
                this.setState({
                    name: '',
                    email: '',
                    category: 'Yoga Teacher',
                    introduction: '',
                    discription: ''
                });

            })
            .catch(error => {
                //console.log(error.message);
                //alert(error.message);
                confirmAlert({
                    title: 'Data Not Insert..!',
                    message: error.message,
                    buttons: [
                        {
                            label: 'OK',
                            
                        }
                    ]
                });
            })
    }



    render() {
        return (

            <div className='backStyle'>
                <NavBar></NavBar>
                <div className="booking-form" >

                    <form id="booking" onSubmit={this.onSubmit}>
                        <h1>Add New Instructor</h1>
                        <br></br>
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
                            <br></br>
                            <span className="RErrorMsg" style={{ color: "red" }}>{this.state.errors["name"]}</span>
                            <span className="ErrorMsg" style={{ color: "red" }}>{this.state.errors["email"]}</span>



                        </div><br></br>

                        <div >
                            <select className="inputBox" name="category" value={this.state.category} onChange={this.onChange} >
                                <option>Yoga Teacher</option>
                                <option >Movement Coach</option>
                                <option>Ski Coach</option>
                            </select>
                        </div><br></br><br></br>

                        <div >
                            <textarea placeholder="Introduction" id="inputText" rows="7" name="introduction"
                                value={this.state.introduction} onChange={this.onChange}></textarea>
                                <br></br>
                            <span className="RErrorMsg" style={{ color: "red" }}>{this.state.errors["introduction"]}</span>
                        </div><br></br>

                        <div >
                            <textarea placeholder="Discription" id="inputText" rows="7" name="discription" value={this.state.discription} onChange={this.onChange}></textarea>
                            <br></br>
                            <span className="RErrorMsg" style={{ color: "red" }}>{this.state.errors["discription"]}</span>
                        </div><br></br>

                        <div >

                            Profile Picture :

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