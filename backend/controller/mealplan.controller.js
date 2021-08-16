const express =  require('express')
const MealPlanModel = require('../models/mealpan.model')

//Creating a meal Plan

const createMealPlan = async function(req,res){

    if(req.body){
        const mealPlan =  MealPlanModel(req.body);

        try{
            let result = await mealPlan.save();
            res.status(200).send({result:result})
        }catch(err){
            res.status(500).send({error:err.message})
        }
    }
}

//Get All Meal Plans

const getAllMealPlans =  async function(rea,res){
    try{
        let results = await MealPlanModel.find({})
        res.status(200).send(results)
    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports={
    createMealPlan,
    getAllMealPlans
}
//das