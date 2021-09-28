import React, { Component } from "react";
import UNavBar from '../UserNavBar/UserNavBar';
import { Link } from "react-router-dom";
import "./userHome.css";
import homeFitness from './fitHome.jpg'
import workout from '../../images/item1.png'
import meal from '../../images/item2.jpg'
import instructor from '../../images/item3.png'
import blog from '../../images/item4.png'


class userHome extends Component {


    render() {
        return (
            <div className="font">
                <UNavBar></UNavBar>

                <img src={homeFitness} width="100%" height="350"></img>



                <br></br><br></br>


                <Link to="/viewmeals">
                    <div className="responsive">
                        <div className="gallery">

                            <img src={meal} alt="Meal Plans" width="500" height="600"></img>

                            <div className="desc">

                                <h2>Meal Plans</h2>
                                <p>Meal delivery services have seen a major uptick in sale during the pandemic as people
                                    look for ways to avoid grocery shopping.</p>

                            </div>

                        </div>
                    </div>
                </Link>

                <Link to="/">
                    <div className="responsive">
                        <div className="gallery">

                            <img src={workout} alt="Workout Plans" width="500" height="600"></img>

                            <div className="desc">

                                <h2>Workout Plans</h2>
                                <p>More than a workout, CrossFit is a lifestyle and the world's leading platform for helth,
                                    happiness, and performance.
                                </p>

                            </div>

                        </div>
                    </div>
                </Link>

                <Link to="/instructorUser">
                    <div className="responsive">
                        <div className="gallery">

                            <img src={instructor} alt="Instructors" width="500" height="600"></img>

                            <div className="desc">

                                <h2>Instructors</h2>
                                <p>Our courses offer the highest standard in efficacy and excellence in human physical
                                    development.
                                </p>

                            </div>

                        </div>
                    </div>
                </Link>

                <Link to="/viewallblogs">
                    <div className="responsive">
                        <div className="gallery">

                            <img src={blog} alt="Helth Blog" width="500" height="600"></img>

                            <div className="desc">

                                <h2>Helth Blog</h2>
                                <p>When you lack good health, everything else in life suffers. It's harder to
                                    concentrate and study. Illness can cause you to fall behind in coursework.
                                </p>

                            </div>

                        </div>
                    </div>
                </Link>

            </div>
        );
    }
}

export default userHome;