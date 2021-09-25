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
}

export default new MealPlanServices();
