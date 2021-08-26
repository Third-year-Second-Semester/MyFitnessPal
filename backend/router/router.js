let router = require ('express').Router()
let mealPlanController =  require('../controller/mealplan.controller')
let blogpostController = require("../controller/blogpost.controller");

const fileUpload = require("../MiddlewearBlogpost/blogpostImageupload");

let workoutPlanController = require("../controller/workoutPlan.controller");
const workoutPlanFileUpload = require("../middlewareWorkoutPlan/workoutPlanFileUpload");




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



/*
blogpost routes
*/


// router.route("/blogposts/create", fileUpload.single("image")).post(blogpostController.createBlogPost);
// router.route("/blogposts/createb").post(blogpostController.createBlogPost);
// router.route("/blogposts/update/:id").put(blogpostController.updateBlogPost);
// router.route("/blogposts/delete/:id").delete(blogpostController.deleteBlogPost);
// router.route("/blogposts/:id").get(blogpostController.getaBlogPost);
// router.route("/blogposts").get(blogpostController.getAllBlogPostsDetails);
    
// router.route("/blogposts/upload").post(blogpostController.uploadBlogImg);


/*
    Workout Plan routes
*/

//Add Plan
router.route("/workoutplans").post(workoutPlanFileUpload.single('imgUrl'), workoutPlanController.createWorkOutPlan)
router.route("/workoutplans").get(workoutPlanController.getAlLWorkoutPlans)
router.route("/workoutplans/:id").get(workoutPlanController.getWorkoutPlan)
router.route("/workoutplans/:id").put(workoutPlanController.updateWorkOutPlan)
router.route("/workoutplans/:id").delete(workoutPlanController.deleteWorkoutPlan)


module.exports = router