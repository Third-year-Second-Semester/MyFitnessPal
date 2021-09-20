import React,{useEffect,useState} from "react";
import NavBar from "../NavBar/Navbar.component";
import "./meals.css";
import Item from "./mealPlanlistItem.component";
import axios from "axios";

const ListMealPlans = () => {

    const[allItems,setItem]=useState();
    useEffect( ()=>{
        
        const retriveAllMealPlans = async ()=>{

            try{
    
                let result = await axios.get('http://localhost:8081/api/mealplans')
                setItem(result.data)
                
    
            }catch(err){
                console.log(err)
            }
        }
        retriveAllMealPlans()
    })

    

  return (
    <div className="listMealMain">
      <NavBar></NavBar>
      <h3 className="formTitle"> Manage Meal Plans</h3>
      <div className="container">
          { 
            allItems ?
             allItems.map(item =>{
                 return(
                     <Item title={item.title} desc={item.description} img={item.image} key={item._id} itemId={item._id}></Item>
                 )
             })
             : <div>Data is loading</div>
          }
        
      </div>
    </div>
  );
};

export default ListMealPlans;
