import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/Navbar.component";
import "./admin.home.css";
import SinglItem from "./singleIetm";

export default function Home(props) {
  return (
    <div className="adminMain">
      <NavBar></NavBar>

      <div className="row insideContainer">
        <div className="col-4">
          <Link to="/workoutplan">
            <SinglItem name="Workout Management" img="Img1"></SinglItem>
          </Link>
        </div>

        <div className="col-4">
          <Link to="/adminmeals">
            <SinglItem name="Meal Plan Management" img="Img2"></SinglItem>
          </Link>
        </div>

        <div className="col-4">
          <Link to="/instructor">
            <SinglItem name="Instructor Management" img="Img3"></SinglItem>
          </Link>
        </div>
        <div className="col-4">
          <Link to="/adminbloglist">
            <SinglItem name="Health Blog Management" img="Img4"></SinglItem>
          </Link>
        </div>
        <div className="col-4">
          <Link>
            <SinglItem name="Payment Management" img="Img5"></SinglItem>
          </Link>
        </div>
        <div className="col-sm-4">
          <Link>
            <SinglItem name="Report Generation" img="Img6"></SinglItem>
          </Link>
        </div>
      </div>
    </div>
  );
}
