const mongoose = require("mongoose")
const{Schema} = mongoose

const mealSchema = mongoose.Schema({
    title:  String, 
    totCal: String,
    category:   String,
    meals: [{day:String,mealtime:String,foodName:String,cal:String }],
    createdate: { type: Date, default: Date.now },
    updatedate: { type: Date, default: Date.now },
    
  });

  module.exports = mongoose.model("MealModel",mealSchema)
  