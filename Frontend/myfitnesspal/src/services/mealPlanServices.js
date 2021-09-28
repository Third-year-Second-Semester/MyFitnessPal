import axios from "axios";

class MealPlanServices {
  retriveAllMealPlans = async () => {
    try {
      let result = await axios.get("http://localhost:8081/api/mealplans");
      return result.data;
    } catch (err) {
    //   return "Data Fetched Failed";
    }
  };

  registerForMealPlan =  (body)=>{
    return axios.post("http://localhost:8081/api/mealplans/reg",body)
  };

  getAllMealPlanRegistrations = ()=>{
    return axios.get("http://localhost:8081/api/mealregistrations");
  };
}

export default new MealPlanServices();
