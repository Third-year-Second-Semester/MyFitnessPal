const mongoose = require("mongoose");
//Schema Defineition
const MealSchema = new mongoose.Schema({
  firstName: {
    type: String,
    //required: true,
  },
  lastName: {
    type: String,
    //required: true,
  },
  email: {
    type: String,
    //required: true,
  },
  mobile: {
    type: String,
    //required: true,
  },
  address: {
    type: String,
    //required: true,
  },
  cardNo: {
    type: String,
    //required: true,
  },
  expDate: {
    type: String,
    //required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  mealPlanId: {

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'MealModel'

  },
});

const mealRegistration = mongoose.model("mealRegistrations", MealSchema);
module.exports = mealRegistration;
