const express =  require('express')
const WorkOutPlanModel = require('../models/workoutPlan.model')

//creating a workout plan
const createWorkOutPlan = async function(req,res){
    if(req.body){
        const workOutPlan =  WorkOutPlanModel(req.body);
        try{
            let plans = await workOutPlan.save();
            res.status(200).send({result:plans})
        }catch(err){
            res.status(500).send({error:err.message})
        }
    }
}