import React, { Component } from "react";
import NavBar from '../../NavBar/Navbar.component';
import "./instrucUser.css";
import Item from "./instructorListCard";
import axios from "axios";

class InstructorAllList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }



    componentDidMount() {
        axios.get('http://localhost:8081/instructor/')
            .then(response => {
                this.setState({ data: response.data.data });
                console.log(response.data.data);
            })
    }

    render() {
        return (
            <div className="ilistMealMain">
                <NavBar></NavBar><br></br>
                <center>
                    <h1 >Instructors</h1>
                </center>
                <div className="container">

                    <div className="row">
                        {this.state.data.map(data => (

                            <Item name={data.name} category={data.category} introduction={data.introduction} img={`http://localhost:8081/${data.image}`} key={data.id} itemId={data._id}></Item>

                        ))}
                    </div>

                </div>
                <br></br>
            </div>
        );
    }
}

export default InstructorAllList;