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

//update a workout plan
const updateWorkOutPlan = async (req, res) => {
    if (req.params && req.params.id) {
      await WorkOutPlanModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body }
      )
        .then((response) => {
          res.status(200).send({ data: response });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });
    }
}

//retrieve all workout plans
const getAlLWorkoutPlans = async (req, res) => {
    await WorkOutPlanModel.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//retrieve a workout plan by id
const getWorkoutPlan = async(req,res) =>{
    if(req.params && req.params.id){
        await WorkOutPlanModel.findById(req.params.id)
        .then(data =>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error:error.message});
        });
    }
}

//delete a workoutplan
const deleteWorkoutPlan = async (req, res) => {
    if (req.params && req.params.id) {
        await WorkOutPlanModel.findByIdAndRemove(req.params.id)
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

module.exports = {
    createWorkOutPlan,
    updateWorkOutPlan,
    getAlLWorkoutPlans,
    getWorkoutPlan,
    deleteWorkoutPlan
};
