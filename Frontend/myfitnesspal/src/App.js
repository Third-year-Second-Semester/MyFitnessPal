import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/AdminHome/adminhome.component";
import MealPlan from "./component/MealPlan/MealPlan.component";

import CreateBlogPost from "./component/BlogPost/admin/createBlogPost";
//import CreateNew from "./component/BlogPost/admin/createNew";
import BlogsList from "./component/BlogPost/admin/blogsList";
import CreateB from './component/BlogPost/admin/createB';
import ViewBlogList from './component/BlogPost/user/viewAllBlogs';
import ViewBlogPost from "./component/BlogPost/user/viewBlogpost";


import InstructorAdd from "./component/Instructor/adminUI/addInstructor";
import HomeInstructor from './component/Instructor/adminUI/homeInstructor';
import EditInstructor from './component/Instructor/adminUI/editInstructor';
import AddWorkoutPlan from './component/WorkoutPlan/addWorkoutPlan.component';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/adminmeals" component={MealPlan}></Route>


          <Route path="/create-blogpost" component={CreateBlogPost}></Route>
          <Route path="/createb" component={CreateB}></Route>
          <Route path="/adminbloglist" component={BlogsList}></Route>
          <Route path="/viewblog" component={ViewBlogPost}></Route>
          <Route path="/viewallblogs" component={ViewBlogList}></Route>

          <Route path="/instructor/add" component={InstructorAdd}></Route>
          <Route path="/instructor" component={HomeInstructor}></Route>
          <Route path="/instructorEdit/:id" component={EditInstructor}></Route>
          
          <Route path="/workoutplan/add" component={AddWorkoutPlan}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
