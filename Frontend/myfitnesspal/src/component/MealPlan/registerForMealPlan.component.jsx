import { useState } from "react";
import UserNavBar from "../UserNavBar/UserNavBar";
import Styles from "./meals.module.css";
import mealPlanServices from "../../services/mealPlanServices";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
const RegisterForMealPlane = (props) => {
  const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    mobile: null,
    address: null,
    cardNo: null,
    expDate: null,
    cvv: null,
    mealPlanId: props.match.params.id,
  };

  const [mealPlan, setMealPlan] = useState(initialState);

  const handleSubmit = async ()=>{
   
    try{
     let res=  await mealPlanServices.registerForMealPlan(mealPlan)
     console.log(res)
    }catch(err){
        alert(err)
    }
    
  }

  const handleFirstName = (e) => {
    const newPlan = { ...mealPlan };
    newPlan.firstName = e.target.value;
    console.log({...newPlan})
    setMealPlan(newPlan)
  };

  const handleLastName = (e) => {
    const newPlan = { ...mealPlan };
    newPlan.lastName = e.target.value;
    console.log({...newPlan})
    setMealPlan(newPlan)
  };

  const handleEmail = (e) => {
    const newPlan = { ...mealPlan };
    newPlan.email = e.target.value;
    setMealPlan(newPlan)
  };

  const handleMobile = (e) => {
    const newPlan = { ...mealPlan };
    newPlan.mobile = e.target.value;
    setMealPlan(newPlan)
  };

  const handleAddress = (e) => {
    const newPlan = { ...mealPlan };
    newPlan.address = e.target.value;
    setMealPlan(newPlan)
  };
  const handleCardNo = (e) => {
    const newPlan = { ...mealPlan };
    newPlan.cardNo = e.target.value;
    setMealPlan(newPlan)
  };

  const handleExpdate = (e)=>{
    const newPlan = { ...mealPlan};
    newPlan.expDate = e.target.value;
    setMealPlan(newPlan)
  }

  const handleCVV = (e)=>{
    const newPlan = { ...mealPlan };
    newPlan.cvv = e.target.value;
    setMealPlan(newPlan)
   
  }
  const handleClear = (e)=>{
    setMealPlan(initialState)
  }
  return (
    <div className={Styles.RegMainContainer}>
      <UserNavBar></UserNavBar>
      <div className={`container ${Styles.RegSubContainer}`}>
        <Form className={`container ${Styles.FormContainer}`} onSubmit={handleSubmit}>
          <h1 className={`${Styles.FormHeading}`}>Register For Meal Plan</h1>
          <div className="row">
            <input
              type="text"
              className={`col-12 col-md-6 ${Styles.commonInput} ${Styles.inlineInput}`}
              placeholder="First Name"
              onChange={handleFirstName}
            />
            <input
              type="text"
              className={`col-12 col-md-6 ${Styles.commonInput} ${Styles.inlineInput}`}
              placeholder="Last Name"
              onChange={handleLastName}
            />
            <input
              type="text"
              placeholder="email"
              className={` ${Styles.commonInput}`}
              onChange={handleEmail}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className={` ${Styles.commonInput}`}
              onChange={handleMobile}
            />
            <input
              type="text"
              placeholder="Address"
              className={` ${Styles.commonInput}`}
              onChange={handleAddress}
            />
            <input
              type="text"
              placeholder="Card Number"
              className={` ${Styles.commonInput}`}
              onChange={handleCardNo}
            />
            <input
              type="text"
              className={`col-12 col-md-6 ${Styles.commonInput} ${Styles.inlineInput} ${Styles.expDate}`}
              placeholder="Exp Date"
              onChange={handleExpdate}
            />
            <input
              type="text"
              className={`col-12 col-md-6 ${Styles.commonInput} ${Styles.inlineInput}`}
              placeholder="CVV"
              onChange={handleCVV}
            />
          </div>

          <div className="row justify-content-center">
            <button
              className={`col-12 col-md-6 btn btn-primary ${Styles.mealButtonDesign}`}
              type="submit"
            >
              Register
            </button>
            <button
              className={`col-12 col-md-6 btn btn-danger ${Styles.mealButtonDesign}`}
              onClick={handleClear}
              type="reset"
            >
              Cancel
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForMealPlane;
