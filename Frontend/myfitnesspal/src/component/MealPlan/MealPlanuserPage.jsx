import React,{useState,useEffect} from 'react'
import UserNavBar from '../UserNavBar/UserNavBar'
import UserListItem from './userlistitem.component'
import MealPlanSerivce from '../../services/mealPlanServices'
import Spinner from '../Common/Spinner'
import './meals.css'

export default function MealPlanuserPage() {
    /**
     * State Variables
     * 
     */

    const [mealPlans,setMealPlan] = React.useState();
    useEffect(()=>{
        MealPlanSerivce.retriveAllMealPlans().then(data=>{
            setMealPlan(data)
        });

      
    },[])

    
    return (
        <div className="container-fluied">
            <UserNavBar></UserNavBar>
            <div className="container userMealListContainer">
                {
                    mealPlans  ? (
                        mealPlans.map(mealPlan=>{
                            return(
                                <UserListItem {...mealPlan}></UserListItem>
                            )
                        })

                               
                        
                    ) :(
                        <Spinner></Spinner>
                    )
                }
                

            </div>
            
        </div>
    )
}
