import React from "react";
import Styles from "./meals.module.css";
import { Link } from "react-router-dom";

export default function UserListItem(props) {
  return (
    <div className={`${Styles.usermealListItemContainer}`}>
      <div className="row">
        <div className="col-12 col-md-5">
          <img
            className={`${Styles.userMealPlaneImageHolder}`}
            src={props.image}
            alt=""
          />
        </div>
        <div className="col-12 col-md-7">
          <div className={`row ${Styles.userMealPlanTopic}`}>{props.title}</div>
          <div className={`row ${Styles.userMealPlanDescription}`}>
            {props.description}
          </div>
          <div className={`row`}>
            <div className="d-flex flex-md-row-reverse flex-column">
              <div className="p-2">
                <div className={`${Styles.MealLearnMoreButton}`} >
                 
                 <Link to={'/regMeals/' +props._id} className={`${Styles.LinkDesign}`}>
                 LearnMore
                 </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
