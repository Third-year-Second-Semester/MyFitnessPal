const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    category:{type:String, required:true,trim:true},
    introduction:{type:String, required:true,trim:true},
    discription:{type:String, required:true,trim:true},
    image:{type:String}
    });

const instructors = mongoose.model('Instructors',InstructorSchema);
module.exports = instructors;