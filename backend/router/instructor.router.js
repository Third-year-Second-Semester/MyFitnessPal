const express = require('express');
const router = express.Router();
const Inscontroller = require('../controller/instructor.controller');

module.exports = function(){
    router.post('/create', Inscontroller.createInstructor);
    router.get('/', Inscontroller.getAllInstructors);
    router.delete('/delete/:id',Inscontroller.deleteInstructors);
    return router;
}