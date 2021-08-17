let router = require ('express').Router()
let mealPlanController =  require('../controller/mealplan.controller')



router.get("/",(req,res)=>{
    res.send("API is working")
})

/*

 Meal Plan Routes
*/

//Add meal plan

router.route("/mealplans").post(mealPlanController.createMealPlan)
router.route("/mealplans").get(mealPlanController.getAllMealPlans)
router.route("/mealplans/:id").get(mealPlanController.getMealPlanById)
router.route("/mealplans/:id").delete(mealPlanController.deleteMealPlanById)
router.route("/mealplans/:id").put(mealPlanController.updateMealPlanById)



module.exports = router