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


const getMealPlanById =  async function(req,res){

    try{
        let results =  await  MealPlanModel.findById(req.params.id)
        res.status(200).send(results)
    }catch (err) {
        res.status(500).send({error:err.message})
    }
}

const deleteMealPlanById = async function(req,res){

    try{
        let result = await  MealPlanModel.deleteOne({_id:req.params.id})
        res.status(200).send(result)
    }catch (err){
        res.status(500).send(err.message);
    }

}

const updateMealPlanById = async function(req,res){
    try{
        let meal = await MealPlanModel.findById(req.params.id)
        meal.title = req.body.title
        meal.totCal =  req.body.totCal
        meal.category = req.body.category
        meal.meals = req.body.meals
        meal.updatedate = Date.now()

        const result = await meal.save();
        res.status(200).send(result)



    }catch (err){
        res.status(500).send(err.message)
    }

}
module.exports={
    createMealPlan,
    getAllMealPlans,
    getMealPlanById,
    deleteMealPlanById,
    updateMealPlanById
}
