import React from "react";
import NavBar from "../NavBar/Navbar.component";
import "./meals.css";
import SingleItme from "../AdminHome/singleIetm";
import { Link } from "react-router-dom";

export default function MealPlan(props) {
  return (
    <div className="container-fluied mealHome">
      <NavBar></NavBar>
      <h1 className="mealPlanHeading">Meal Plan Managment </h1>

      <div className="container-fluied">
        <div className="row">
        <Link className="col-4 " to="addNewMeals">
        <SingleItme name="Add New Meal Plan" img="Img7" ></SingleItme>
      </Link>
      <Link className="col-4" to="adminmeallist">
        <SingleItme name="View Meal Plan List" img="Img8" ></SingleItme>
      </Link>
      <Link className="col-4" to="/mealreport">
        <SingleItme name="View Delivery List" img="Img9" ></SingleItme>
      </Link>
    </div>

        </div>
      </div>

     
     
  );
}
