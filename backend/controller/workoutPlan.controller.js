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

module.exports = {
    createWorkOutPlan,
    updateWorkOutPlan
};
