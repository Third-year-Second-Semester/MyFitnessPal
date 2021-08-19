
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as  Router,Route,Switch } from "react-router-dom";
import Home from "./component/Home/home.component";
import MealPlan from "./component/MealPlan/MealPlan.component";
import InstructorAdd from "./component/Instructor/adminUI/addInstructor";
import HomeInstructor from './component/Instructor/adminUI/homeInstructor';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/adminmeals" component={MealPlan}></Route>
          <Route path="/instructor/add" component={InstructorAdd}></Route>
          <Route path="/instructor" component={HomeInstructor}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
