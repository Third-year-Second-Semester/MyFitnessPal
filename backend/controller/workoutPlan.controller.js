const express =  require('express')
const WorkOutPlanModel = require('../models/workoutPlan.model')
const WorkOutPlanPaymentModel = require('../models/workoutPlanPayment.model')

//creating a workout plan
const createWorkOutPlan = async function(req,res){
    if(req.body){
        const name = req.body.name;
        const area = req.body.area;
        const level = req.body.level;
        const price = req.body.price;
        const description = req.body.description;
        const detailedDescription = req.body.detailedDescription;
        const imgUrl = req.file.path;

        const newPlan = {
        name,
        area,
        level,
        price,
        description,
        detailedDescription,
        imgUrl
        };
        const workOutPlan =  WorkOutPlanModel(newPlan);
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

//workout plan payment
const payWorkOutPlan = async function(req,res){
    if(req.body){
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const mobile = req.body.mobile;
        const plan = req.body.plan;
        const price = req.body.price;
        const cardNo = req.body.cardNo;
        const expDate = req.body.expDate;
        const cvv = req.body.cvv;

        const newPayment = {
        firstName,
        lastName,
        email,
        mobile,
        plan,
        price,
        cardNo,
        expDate,
        cvv
        };
        const workOutPlan =  WorkOutPlanPaymentModel(newPayment);
        try{
            let plans = await workOutPlan.save();
            res.status(200).send({result:plans})
        }catch(err){
            res.status(500).send({error:err.message})
        }
    }
}

//retrieve all workout plan payments
const getAlLWorkoutPlanPayments = async (req, res) => {
    await WorkOutPlanPaymentModel.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

module.exports = {
    createWorkOutPlan,
    updateWorkOutPlan,
    getAlLWorkoutPlans,
    getWorkoutPlan,
    deleteWorkoutPlan,
    payWorkOutPlan,
    getAlLWorkoutPlanPayments
};
