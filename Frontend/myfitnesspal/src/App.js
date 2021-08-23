import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/AdminHome/adminhome.component";
import MealPlan from "./component/MealPlan/MealPlan.component";

import CreateBlogPost from "./component/BlogPost/admin/createBlogPost";
//import CreateNew from "./component/BlogPost/admin/createNew";
import BlogsList from "./component/BlogPost/admin/blogsList";
import ViewAllBlogs from './component/BlogPost/user/viewAllBlogs';
import ViewBlogPost from "./component/BlogPost/user/viewBlogpost";
import ViewABlog from './component/BlogPost/admin/viewablog';


import InstructorAdd from "./component/Instructor/adminUI/addInstructor";
import HomeInstructor from './component/Instructor/adminUI/homeInstructor';
import EditInstructor from './component/Instructor/adminUI/editInstructor';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/adminmeals" component={MealPlan}></Route>

          <Route path="/create-blogpost" component={CreateBlogPost}></Route>
          <Route path="/adminbloglist" component={BlogsList}></Route>
          <Route path="/adminviewblog/:id" component={ViewABlog}></Route>
          <Route path="/viewallblogs" component={ViewAllBlogs}></Route>
          <Route path="/blog/:id" component={ViewBlogPost}></Route>

          <Route path="/instructor/add" component={InstructorAdd}></Route>
          <Route path="/instructor" component={HomeInstructor}></Route>
          <Route path="/instructorEdit/:id" component={EditInstructor}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
