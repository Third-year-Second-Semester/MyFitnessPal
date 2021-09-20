import React from "react";
import SButton from "../Common/SButton.component";
import CButton from "../Common/CButton.component";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link} from "react-router-dom";
export default function MealListItem(props) {
  const handleDelte = async () => {
    try {
      await axios.delete("http://localhost:8081/api/mealplans/" + props.itemId);
      alert("Meal Plan deleted SuccessFully");
    } catch (err) {
      console.log(err);
    }
  };


  const goToUpdate = ()=>{
    //history.push("adminmealupdate/" +props.itemId );
    window.location = 'adminmealupdate/' +props.itemId
  }

  return (
    <div className="mealListItemContainer">
      <div className="row">
        <div className="col-sm 2 ">
          <img className="mealListImgHolder" src={props.img} alt="" />
        </div>
        <div className="col-sm 10">
          <h3 className="mlistTitle">{props.title}</h3>
          <div className="mItemDesc">
            <p>{props.desc}</p>
            <Link to={'mealdetail/' +props.itemId}>
            <h6 className="redmoreLink"> Read More </h6>
            </Link>
            
          </div>
          <div className="row">
            
              <SButton name="Update  Plan" className="col-5 sBuIL" emitFunc={goToUpdate}></SButton>
           

            <CButton
              name="Delete Plan"
              className="col-5"
              emitFunc={handleDelte}
            ></CButton>
          </div>
        </div>
      </div>
    </div>
  );
}
