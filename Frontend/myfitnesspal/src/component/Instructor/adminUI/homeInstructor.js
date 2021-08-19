import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './homeInstructor.css';
import NavBar from '../../NavBar/Navbar.component';
import axios from 'axios';

class HomeInstructor extends Component {
render() {
    return (
        <div className='homebackStyle'>
            <NavBar></NavBar>
            <br></br>
            <div>
            <Link to="/instructor/add">
            <button className="addBut">+ Add New Instructor</button>
            </Link>
            <button className="repBut">Instructor Details Report</button>
            </div>

            
        </div>
    )
}
}

export default HomeInstructor;