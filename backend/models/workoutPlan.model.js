const mongoose = require("mongoose")
const{Schema} = mongoose

const workoutPlanSchema = mongoose.Schema({
    name:  String, 
    level: String,
    area: String,
    description:   String,
    detailedDescription: String,
    price: Number,
    imgUrl: {type:String} ,
    createdate: { type: Date, default: Date.now }
    
  });

  module.exports = mongoose.model("WorkoutPlanModel",workoutPlanSchema)