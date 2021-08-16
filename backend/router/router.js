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

module.exports = router