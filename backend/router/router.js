let router = require ('express').Router()
let mealPlanController =  require('../controller/mealplan.controller')
let blogpostController = require("../controller/blogpost.controller");



router.get("/",(req,res)=>{
    res.send("API is working")
})

/*

 Meal Plan Routes
*/

//Add meal plan

router.route("/mealplans").post(mealPlanController.createMealPlan)
router.route("/mealplans").get(mealPlanController.getAllMealPlans)

/*
blogpost routes
*/

router.route("/blogposts/create").post(blogpostController.createBlogPost)
router.route("/blogposts/update/:id").put(blogpostController.updateBlogPost)
router.route("/blogposts/delete/:id").delete(blogpostController.deleteBlogPost)
router.route("/blogposts/:id").get(blogpostController.getaBlogPost)
router.route("/blogposts").get(blogpostController.getAllBlogPostsDetails)


module.exports = router