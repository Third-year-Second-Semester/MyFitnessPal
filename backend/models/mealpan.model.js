const mongoose = require("mongoose")
const{Schema} = mongoose

const mealSchema = mongoose.Schema({
    title:  String,
    description:String,
    image:String,
    totCal: String,
    category:   String,
    meals: [{day:String,breakfast:String,lunch:String,dinner:String,cal:String }],
    createdate: { type: Date, default:getCurrentDate() },
    updatedate: { type: Date, default: getCurrentDate()},
    
  });

function getCurrentDate(){
    var today =  new Date()
    var dd = String(today.getDate()).padStart(2,'0')
    var mm = String(today.getMonth() + 1).padStart(2,'0')
    var yyyy = today.getFullYear()
    return mm + '/' + dd + '/' + yyyy
}
  module.exports = mongoose.model("MealModel",mealSchema)
  