import axios from "axios";
import React,{useState,useEffect} from "react";
import NavBar from "../NavBar/Navbar.component";
import './meals.css'
import ViewMealSingle from './viewMealSingle.component'
export default function ViewMealPlan (props){

    

    const [mealPlan,setMeal] = useState()
    

    useEffect(()=>{
        const retriveData = async ()=>{
            try{
                let result = await  axios.get('http://localhost:8081/api/mealplans/'+props.match.params.id)
                setMeal(result.data)
            }catch(err){

            }
        }
        retriveData()
    })

    return(<div>
        <NavBar></NavBar>
        
        {
            mealPlan ? <div className="row mealcover">
    
            <div className="coverTitle"> {mealPlan.title} <br/> 1200cal</div>
           
           
 
         </div> : <div>Data is loading</div>
        }
        

        {
            mealPlan ? mealPlan.meals.map((plan,index)=>{
                const day = index+1
                return(
                   
            <div className="container-fluied row mealrowContainer">
                <h4 className="mealDate">{'Day ' +day  }</h4>
                
            <div className="col-sm 4">
            <ViewMealSingle time="Breakfast" desc={plan.breakfast}></ViewMealSingle>
            </div>
            <div className="col-sm 4">
            <ViewMealSingle time="Lunch" desc={plan.lunch}></ViewMealSingle>
            </div>
            <div className="col-sm 4">
            <ViewMealSingle time="Dinner" desc={plan.dinner}></ViewMealSingle>
            </div>
        
        </div>
       

                )
                
            }) : <div>Data is Loading</div>
            
        }
        
        

    </div>)
}
