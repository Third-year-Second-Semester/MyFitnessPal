import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './homeInstructor.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import NavBar from '../../NavBar/Navbar.component';
import axios from 'axios';

class HomeInstructor extends Component {


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

    DeleteKeynote(e, insID) {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => axios.delete(`http://localhost:8081/instructor/delete/${insID}`)
                        .then(response => {

                            //alert('Delete Success..!');
                            window.location = `/instructor`
                        })
                        .catch(error => {
                            alert(error.message);
                        })

                },
                {
                    label: 'No'

                }
            ]
        });
    }

    render() {
        return (

            <div className="clearfix">
                <NavBar></NavBar>
                <br></br>
                <div className='homebackStyle'>
                    <Link to="/instructor/add">
                        <button className="addBut">+ Add New Instructor</button>
                    </Link>
                    <button className="repBut">Instructor Details Report</button>
                </div>
                <br></br>
                <div className="row">
                    {this.state.data.map(data => (
                        <div className="col-md-4 animated fadeIn" key={data.id}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="avatar">
                                        <img
                                            src={`http://localhost:8081/${data.image}`}
                                            className="card-img-top"
                                            alt=""
                                        />
                                    </div>
                                    <h3 className="card-title">
                                    {data.name}</h3>

                                    <h5 className="card-title">
                                    {data.category}
                                    </h5>
                                    <p className="card-text">
                                    {data.email}
                                    </p>
                                    

                                        <button className="UpdateBut">Update</button> <button className="deleBut" onClick={e => this.DeleteKeynote(e, data._id)}>Delete</button>
                                        


                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        );
    }
}

export default HomeInstructor;