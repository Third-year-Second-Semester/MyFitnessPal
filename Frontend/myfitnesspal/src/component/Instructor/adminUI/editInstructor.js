import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './editInstructor.css';
import NavBar from '../../NavBar/Navbar.component';

class editInstructor extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            category: '',
            introduction: '',
            discription: ''

        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/instructor/a/${this.props.match.params.id}`)
            .then(response => {
                
                this.setState({
                    id: response.data.data._id,
                    name: response.data.data.name,
                    email: response.data.data.email,
                    category: response.data.data.category,
                    introduction: response.data.data.introduction,
                    discription: response.data.data.discription,
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
        let Instructor = {
            _id:this.state.id,
            name: this.state.name,
            email: this.state.email,
            category:this.state.category,
            introduction:this.state.introduction,
            discription:this.state.discription
        }
        console.log(Instructor);
        axios.put(`http://localhost:8081/instructor/update/${this.state.id}`, Instructor)
        .then(response =>{
            alert('Instructor Details updated');
            console.log(this.state.id);
            window.location = `/instructor`
        })
        .catch(error =>{
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
                        <h1>Edit Instructor Detils</h1>
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
                              value={this.state.introduction} onChange={this.onChange}  ></textarea>
                        </div><br></br>

                        <div >
                            <textarea placeholder="Discription" id="inputText" rows="7" name="discription" value={this.state.discription} onChange={this.onChange}></textarea>
                        </div><br></br>

                    
                        <button type="submit" id="bookBut">Update</button>
                        
                        <Link to="/instructor">
                        <button id="bookButTabC">Close</button>
                        </Link>
                    </form>
                </div>
            </div>

        )
    }
}

export default editInstructor;