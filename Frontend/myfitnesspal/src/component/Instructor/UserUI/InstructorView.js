import React, { Component } from "react";
import NavBar from '../../NavBar/Navbar.component';
import "./InstructorView.css";
import axios from "axios";

class InstructorView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            category: '',
            introduction: '',
            discription: '',
            image: ''

        }
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
                    image: response.data.data.image
                });
                console.log(response.data.data._id);
                console.log(this.props.match.params.id);
                console.log(this.state.image)
            })
            .catch(error => {
                alert(error.message)
            })

    }

    render() {
        return (
            <div>
                <NavBar></NavBar><br></br><br></br>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 ">
                            <img
                                className="iunstListImgHolder"
                                src={`http://localhost:8081/${this.state.image}`}
                                alt=""
                            />
                        </div>
                        <div className="col-sm-6">
                            <h3 className="ilistTitle">{this.state.name}</h3>
                            <h5>{this.state.category}</h5>
                            <div className="iItemDesc">
                                <p>
                                    {this.state.introduction}
                                </p>

                            </div>
                            <p>Contact Me: {this.state.email}</p>


                        </div>

                    </div>

                    <br></br>
                    <p>{this.state.discription}</p>
                </div>
                
            </div>
        );
    }
}

export default InstructorView;