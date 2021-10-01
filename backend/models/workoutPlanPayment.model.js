const mongoose = require("mongoose")

const workoutPlanPaymentSchema = mongoose.Schema({
    firstName:  String, 
    lastName:  String, 
    email: String,
    mobile: String,
    plan: String,
    price: String,
    cardNo: String,
    expDate:  String,
    cvv: String,
    date: { type: Date, default: Date.now }
    
  });

  module.exports = mongoose.model("WorkoutPlanPaymentModel",workoutPlanPaymentSchema)