import React,{useEffect,useState,useRef} from "react";
import NavBar from "../NavBar/Navbar.component";
import SButton from "../Common/SButton.component";
import CButton from "../Common/CButton.component";
import axios from 'axios'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useHistory } from "react-router-dom";

function EditMealPlan(props) {

   
 

  
      const [mealPlan, setPlan] = useState();
      const history = useHistory();

      useEffect(()=>{

        const retriveData = async ()=>{
            try{
                let result = await  axios.get('http://localhost:8081/api/mealplans/'+props.match.params.id)
                setPlan(result.data)
            }catch(err){

            }
        }
        retriveData()
          
    },[props.match.params.id])
    
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
        //form.current.validateAll();
        
        try {
          await axios.put("http://localhost:8081/api/mealplans/"+props.match.params.id, mealPlan);
       
        } catch (err) {
          console.log(err);
        }
        alert("Meal Plan Updated");
        
        history.push("/adminmeallist");

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

    
    
      return (

        mealPlan ?  <div className="addNewMain">
        <NavBar></NavBar>
        <form className="formContainer" onSubmit={hanldeSubmit} >
          <h3 className="formTitle">Update meal plan</h3>
          <div className="form-group formS">
            <label htmlFor="planName" className="dayHeading">
              Meal plan name
            </label>
           <input
              type="text"
              className="form-control basicInput"
              id="planName"
              placeholder="7-Day Weight Gain"
              value={mealPlan.title}
              onChange={handleTitle}
              validations={[required]}
               />
            <div className="invalid-feedback">Please provide a valid city.</div>
            <label htmlFor="planName" className="dayHeading">
              Description
            </label>
           <input
              type="text"
              className="form-control basicInput"
              id="planName"
              placeholder="Description Here"
              onChange={handleDescription}
              value={mealPlan.description}
            />
  
            <label htmlFor="planName" className="dayHeading">
              Category
            </label>
           <input
              type="text"
              className="form-control basicInput"
              id="planName"
              placeholder="Add Category ex,Weight Gain"
              value={mealPlan.category}
              onChange={handleCategory}
              
            />
  
            <label htmlFor="planName" className="dayHeading">
              Image
            </label>
           <input
              type="text"
              className="form-control basicInput"
              id="planName"
              placeholder="Image url here"
              value={mealPlan.image}
              onChange={handleImg}
              
            />
  
            <div className="allDays">
              <h4 className="formTitle">Meal details</h4>
              <div id="day1" className="daySection">

                  
                <label htmlFor="planName" className="dayHeading">
                  Day 1
                </label>
  
                <div className="row mb-2">
                  <div className="col">
                   <input
                      id="d1b"
                      type="text"
                      className="form-control"
                      placeholder="Breakfast"
                      onChange={handleBreakfast}
                      value={mealPlan.meals[0].breakfast}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d1l"
                      type="text"
                      className="form-control"
                      placeholder="Lunch"
                      onChange={handleLunch}
                      value={mealPlan.meals[0].lunch}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d1d"
                      type="text"
                      className="form-control"
                      placeholder="Dinner"
                      onChange={handleDinner}
                      value={mealPlan.meals[0].dinner}
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
                   <input
                      id="d2b"
                      type="text"
                      className="form-control"
                      placeholder="Breakfast"
                      onChange={handleBreakfast}
                      value={mealPlan.meals[1].breakfast}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d2l"
                      type="text"
                      className="form-control"
                      placeholder="Lunch"
                      onChange={handleLunch}
                      value={mealPlan.meals[1].lunch}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d2d"
                      type="text"
                      className="form-control"
                      placeholder="Dinner"
                      onChange={handleDinner}
                      value={mealPlan.meals[1].dinner}
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
                   <input
                      id="d3b"
                      type="text"
                      className="form-control"
                      placeholder="Breakfast"
                      onChange={handleBreakfast}
                      value={mealPlan.meals[2].breakfast}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d3l"
                      type="text"
                      className="form-control"
                      placeholder="Lunch"
                      onChange={handleLunch}
                      value={mealPlan.meals[2].lunch}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d3d"
                      type="text"
                      className="form-control"
                      placeholder="Dinner"
                      onChange={handleDinner}
                      value={mealPlan.meals[2].dinner}
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
                   <input
                      id="d4b"
                      type="text"
                      className="form-control"
                      placeholder="Breakfast"
                      onChange={handleBreakfast}
                      value={mealPlan.meals[3].breakfast}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d4l"
                      type="text"
                      className="form-control"
                      placeholder="Lunch"
                      onChange={handleLunch}
                      value={mealPlan.meals[3].lunch}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d4d"
                      type="text"
                      className="form-control"
                      placeholder="Dinner"
                      onChange={handleDinner}
                      value={mealPlan.meals[3].dinner}
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
                   <input
                      id="d5b"
                      type="text"
                      className="form-control"
                      placeholder="Breakfast"
                      onChange={handleBreakfast}
                      value={mealPlan.meals[4].breakfast}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d5l"
                      type="text"
                      className="form-control"
                      placeholder="Lunch"
                      value={mealPlan.meals[4].lunch}
                      onChange={handleLunch}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d4d"
                      type="text"
                      className="form-control"
                      placeholder="Dinner"
                      value={mealPlan.meals[4].dinner}
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
                   <input
                      id="d6b"
                      type="text"
                      className="form-control"
                      placeholder="Breakfast"
                      value={mealPlan.meals[5].breakfast}
                      onChange={handleBreakfast}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d6l"
                      type="text"
                      className="form-control"
                      placeholder="Lunch"
                      value={mealPlan.meals[5].lunch}
                      onChange={handleLunch}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d6d"
                      type="text"
                      className="form-control"
                      placeholder="Dinner"
                      value={mealPlan.meals[5].dinner}
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
                   <input
                      id="d7b"
                      type="text"
                      className="form-control"
                      placeholder="Breakfast"
                      onChange={handleBreakfast}
                      value={mealPlan.meals[6].breakfast}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d7l"
                      type="text"
                      className="form-control"
                      placeholder="Lunch"
                      onChange={handleLunch}
                      value={mealPlan.meals[6].lunch}
                    />
                  </div>
                  <div className="col">
                   <input
                      id="d7d"
                      type="text"
                      className="form-control"
                      placeholder="Dinner"
                      onChange={handleDinner}
                      value={mealPlan.meals[6].dinner}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row justify-content-center mt-5">
          
            <SButton
              name="Update  plan"
              className="col me3"
              emitFunc={hanldeSubmit}
              type="submit"
           
              
            ></SButton>
            <CButton name="Cancel"></CButton>
          </div>
        </form>
      </div>:<div>Data is loading</div>
       
      );
}

export default EditMealPlan;
