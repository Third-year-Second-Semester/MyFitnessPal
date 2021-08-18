const { response } = require('express');
const Instructor = require('../models/instructor.model');

//Add new Instructor
const createInstructor = async (req, res) => {
    if (req.body) {
        const instructor = new Instructor(req.body);
        await instructor.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).
            catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//get all Instructors
const getAllInstructors = async (req, res) => {
    await Instructor.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//Delete a instructor
const deleteInstructors = async (req, res) => {
    if (req.params && req.params.id) {
        await Instructor.findByIdAndRemove(req.params.id)
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Update a instructor
const updateInstructor = async (req, res) => {
    if (req.params && req.params.id) {
        await Instructor.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//find a instructor
const getAInstructor = async(req,res) =>{
    if(req.params && req.params.id){
        await Instructor.findById(req.params.id)
        .then(data =>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error:error.message});
        });
    }
}

module.exports = {
    createInstructor,
    getAllInstructors,
    deleteInstructors,
    updateInstructor,
    getAInstructor
}