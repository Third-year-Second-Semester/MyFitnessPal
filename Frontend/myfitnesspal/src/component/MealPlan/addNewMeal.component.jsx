import React, { useState ,useRef} from "react";
import NavBar from "../NavBar/Navbar.component";
import SButton from "../Common/SButton.component";
import CButton from "../Common/CButton.component";
import axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

export default function AddNewMealPlan() {
  

  const initalState = {
    title: null,
    description: null,
    image: null,
    totCal: "",
    category:null,
    meals: [
      { breakfast: "", lunch: "", dinner: "", cal: "" },
      { breakfast: "", lunch: "", dinner: "", cal: "" },
      { breakfast: "", lunch: "", dinner: "", cal: "" },
      { breakfast: "", lunch: "", dinner: "", cal: "" },
      { breakfast: "", lunch: "", dinner: "", cal: "" },
      { breakfast: "", lunch: "", dinner: "", cal: "" },
      { breakfast: "", lunch: "", dinner: "", cal: "" },
    ],
  };
  const [mealPlan, setPlan] = useState(initalState);


  const handleCancel = ()=>{
    window.location="/addNewMeals"
  }
  const handleTitle = (e) => {
    let newPaln = { ...mealPlan };
    newPaln.title = e.target.value;
    setPlan(newPaln);
  };

  const handleDescription = (e) => {
    let newPaln = { ...mealPlan };
    newPaln.description = e.target.value;
    setPlan(newPaln);
  };

  const handleCategory = (e) => {
    let newPaln = { ...mealPlan };
    newPaln.category = e.target.value;
    setPlan(newPaln);
  };

  const handleImg = (e) => {
    let newPaln = { ...mealPlan };
    newPaln.image = e.target.value;
    setPlan(newPaln);
  };

  const handleBreakfast = (e) => {
    let newMealPlan = { ...mealPlan };

    switch (e.target.id) {
      case "d1b":
        newMealPlan.meals[0].breakfast = e.target.value;

        break;
      case "d2b":
        newMealPlan.meals[1].breakfast = e.target.value;
        break;
      case "d3b":
        newMealPlan.meals[2].breakfast = e.target.value;
        break;
      case "d4b":
        newMealPlan.meals[3].breakfast = e.target.value;
        break;
      case "d5b":
        newMealPlan.meals[4].breakfast = e.target.value;
        break;
      case "d6b":
        newMealPlan.meals[5].breakfast = e.target.value;
        break;
      case "d7b":
        newMealPlan.meals[6].breakfast = e.target.value;
        break;

      default:
        break;
    }

    setPlan(newMealPlan);
  };

  const handleLunch = (e) => {
    let newMealPlan = { ...mealPlan };

    switch (e.target.id) {
      case "d1l":
        newMealPlan.meals[0].lunch = e.target.value;

        break;
      case "d2l":
        newMealPlan.meals[1].lunch = e.target.value;
        break;
      case "d3l":
        newMealPlan.meals[2].lunch = e.target.value;
        break;
      case "d4l":
        newMealPlan.meals[3].lunch = e.target.value;
        break;
      case "d5l":
        newMealPlan.meals[4].lunch = e.target.value;
        break;
      case "d6l":
        newMealPlan.meals[5].lunch = e.target.value;
        break;
      case "d7l":
        newMealPlan.meals[6].lunch = e.target.value;
        break;

      default:
        break;
    }

    setPlan(newMealPlan);
  };

  const handleDinner = (e) => {
    let newMealPlan = { ...mealPlan };

    switch (e.target.id) {
      case "d1d":
        newMealPlan.meals[0].dinner = e.target.value;

        break;
      case "d2d":
        newMealPlan.meals[1].dinner = e.target.value;
        break;
      case "d3d":
        newMealPlan.meals[2].dinner = e.target.value;
        break;
      case "d4d":
        newMealPlan.meals[3].dinner = e.target.value;
        break;
      case "d5d":
        newMealPlan.meals[4].dinner = e.target.value;
        break;
      case "d6d":
        newMealPlan.meals[5].dinnner = e.target.value;
        break;
      case "d7d":
        newMealPlan.meals[6].dinner = e.target.value;
        break;

      default:
        break;
    }

    setPlan(newMealPlan);
  };

  const hanldeSubmit = async () => {
    alert("Meal Plan Added Successfull");
    form.current.validateAll();
    
    try {
      await axios.post("http://localhost:8081/api/mealplans", mealPlan);
      window.location="/adminmeallist"
    } catch (err) {
      console.log(err);
    }
  };

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
}
const form = useRef();
const checkBtn = useRef();


  return (
    <div className="addNewMain">
      <NavBar></NavBar>
      <Form className="formContainer" onSubmit={hanldeSubmit} ref={form}>
        <h3 className="formTitle">Create New Meal plan</h3>
        <div className="form-group formS">
          <label htmlFor="planName" className="dayHeading">
            Meal plan name
          </label>
          <Input
            type="text"
            className="form-control basicInput"
            id="planName"
            placeholder="7-Day Weight Gain"
            validations={[required]}
            onChange={handleTitle}
            required/>
          <div className="invalid-feedback">Please provide a valid city.</div>
          <label htmlFor="planName" className="dayHeading">
            Description
          </label>
          <Input
            type="text"
            className="form-control basicInput"
            id="planName"
            placeholder="Description Here"
            onChange={handleDescription}
          />

          <label htmlFor="planName" className="dayHeading">
            Category
          </label>
          <Input
            type="text"
            className="form-control basicInput"
            id="planName"
            placeholder="Add Category ex,Weight Gain"
            onChange={handleCategory}
          />

          <label htmlFor="planName" className="dayHeading">
            Image
          </label>
          <Input
            type="text"
            className="form-control basicInput"
            id="planName"
            placeholder="Image url here"
            onChange={handleImg}
          />

          <div className="allDays">
            <h4 className="formTitle">Add meals for each days</h4>
            <div id="day1" className="daySection">
              <label htmlFor="planName" className="dayHeading">
                Day 1
              </label>

              <div className="row mb-2">
                <div className="col">
                  <Input
                    id="d1b"
                    type="text"
                    className="form-control"
                    placeholder="Breakfast"
                    onChange={handleBreakfast}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d1l"
                    type="text"
                    className="form-control"
                    placeholder="Lunch"
                    onChange={handleLunch}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d1d"
                    type="text"
                    className="form-control"
                    placeholder="Dinner"
                    onChange={handleDinner}
                  />
                </div>
              </div>
            
            </div>

            <div id="day2" className="daySection">
              <label htmlFor="planName" className="dayHeading">
                Day 2
              </label>

              <div className="row mb-2">
                <div className="col">
                  <Input
                    id="d2b"
                    type="text"
                    className="form-control"
                    placeholder="Breakfast"
                    onChange={handleBreakfast}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d2l"
                    type="text"
                    className="form-control"
                    placeholder="Lunch"
                    onChange={handleLunch}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d2d"
                    type="text"
                    className="form-control"
                    placeholder="Dinner"
                    onChange={handleDinner}
                  />
                </div>
              </div>
            </div>

            <div id="day3" className="daySection">
              <label htmlFor="planName" className="dayHeading">
                Day 3
              </label>

              <div className="row mb-2">
                <div className="col">
                  <Input
                    id="d3b"
                    type="text"
                    className="form-control"
                    placeholder="Breakfast"
                    onChange={handleBreakfast}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d3l"
                    type="text"
                    className="form-control"
                    placeholder="Lunch"
                    onChange={handleLunch}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d3d"
                    type="text"
                    className="form-control"
                    placeholder="Dinner"
                    onChange={handleDinner}
                  />
                </div>
              </div>
            </div>

            <div id="day4" className="daySection">
              <label htmlFor="planName" className="dayHeading">
                Day 4
              </label>

              <div className="row mb-2">
                <div className="col">
                  <Input
                    id="d4b"
                    type="text"
                    className="form-control"
                    placeholder="Breakfast"
                    onChange={handleBreakfast}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d4l"
                    type="text"
                    className="form-control"
                    placeholder="Lunch"
                    onChange={handleLunch}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d4d"
                    type="text"
                    className="form-control"
                    placeholder="Dinner"
                    onChange={handleDinner}
                  />
                </div>
              </div>
            </div>

            <div id="day5" className="daySection">
              <label htmlFor="planName" className="dayHeading">
                Day 5
              </label>

              <div className="row mb-2">
                <div className="col">
                  <Input
                    id="d5b"
                    type="text"
                    className="form-control"
                    placeholder="Breakfast"
                    onChange={handleBreakfast}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d5l"
                    type="text"
                    className="form-control"
                    placeholder="Lunch"
                    onChange={handleLunch}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d4d"
                    type="text"
                    className="form-control"
                    placeholder="Dinner"
                    onChange={handleDinner}
                  />
                </div>
              </div>
            </div>

            <div id="day6" className="daySection">
              <label htmlFor="planName" className="dayHeading">
                Day 6
              </label>

              <div className="row mb-2">
                <div className="col">
                  <Input
                    id="d6b"
                    type="text"
                    className="form-control"
                    placeholder="Breakfast"
                    onChange={handleBreakfast}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d6l"
                    type="text"
                    className="form-control"
                    placeholder="Lunch"
                    onChange={handleLunch}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d6d"
                    type="text"
                    className="form-control"
                    placeholder="Dinner"
                    onChange={handleDinner}
                  />
                </div>
              </div>
            </div>

            <div id="day7" className="daySection">
              <label htmlFor="planName" className="dayHeading">
                Day 7
              </label>

              <div className="row mb-2">
                <div className="col">
                  <Input
                    id="d7b"
                    type="text"
                    className="form-control"
                    placeholder="Breakfast"
                    onChange={handleBreakfast}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d7l"
                    type="text"
                    className="form-control"
                    placeholder="Lunch"
                    onChange={handleLunch}
                  />
                </div>
                <div className="col">
                  <Input
                    id="d7d"
                    type="text"
                    className="form-control"
                    placeholder="Dinner"
                    onChange={handleDinner}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
        <CheckButton style={{ display: "none" }} ref={checkBtn} > What the hell </CheckButton>
          <SButton
            name="Add New"
            className="col me3"
            //emitFunc={hanldeSubmit}
            type="submit"
            ref={checkBtn}
            
          ></SButton>
          <CButton name="Cancel" emitFunc={handleCancel}></CButton>
        </div>
      </Form>
    </div>
  );
}

