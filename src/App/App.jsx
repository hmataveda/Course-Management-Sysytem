import React, { useEffect, useState } from "react";
import { Switch, Redirect, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticationService } from "../_services";
import { Provider } from "react-redux";
import store from "../store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { history, Role } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { AdminPage } from "../AdminPage";
import { ProfilePage } from "../HomePage/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import CourseDashboard from "../components/CourseDashboard";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navigation/Navbar";
import Navbar1 from "../components/Navigation/Navbar1";

import { Route, Router } from "react-router-dom";
import CreateCategory from "../components/CreateCategory";

import EditCategory from "../components/EditCategory";
import UpdateCourse from "../components/UpdateCourse";

import CreateCourse from "../components/CreateCourse";
import CreateTopic from "../components/topicComponent/CreateTopic";
import UpdateTopic from "../components/topicComponent/UpdateTopic";
import TopicList from "../components/topicComponent/TopicList";

import CreateQuiz from "../components/Trainer/CreateQuiz";
import TrainerHomePage from "../components/Trainer/TrainerHomePage";
import Viewquiz from "../components/Trainer/Viewquiz";
import Quiz1 from "../components/Student/Quiz1";
import StudentHomePage from "../components/Student/StudentHomePage";
import QuizList from "../components/Student/QuizList";
import UpdateQuestion from "../components/Trainer/UpdateQuestion";
import Quiz2 from "../components/Student/Quiz2";
import QuizHomePage from "../components/Pages/QuizHomePage";
import AdminHomePage from "../components/QuizAdmin/AdminHomePage";
import AdminTrainerHomePage from "../components/QuizAdmin/AdminTrainerHomePage";
import AdminCreateQuiz from "../components/QuizAdmin/AdminCreateQuiz";
import AdminViewquiz from "../components/QuizAdmin/AdminViewquiz";
import AdminStudentHomePage from "../components/QuizAdmin/AdminStudentHomePage";
import AdminQuizList from "../components/QuizAdmin/AdminQuizList";
import AdminQuiz1 from "../components/QuizAdmin/AdminQuiz1";
import AdminQuiz2 from "../components/QuizAdmin/AdminQuiz2";

function App() {
  const alert = useSelector((state) => state.alert);
  const [user, setuser] = useState(null);
  const [currentUser, setcurrentUser] = useState("");
  const [isAdmin, setisAdmin] = useState(false);
  // const { pathname } = useLocation();

  // const dispatch = useDispatch();

  useEffect(() => {
    // history.listen((location, action) => {
    //     // clear alert on location change
    //     dispatch(alertActions.clear());
    // });
    authenticationService.currentUser.subscribe((x) => setuser(x));
    authenticationService.currentUser.subscribe((x) =>
      setisAdmin(x && x.role === Role.Admin)
    );
  }, []);

  return (
    <>
      <div>
        <Router history={history}>
          {user ? <Navbar /> : <Navbar1 />}
          <div className="container pt-4 pb-4">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
          </div>
          <Switch>
            {/* Login Module  */}
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute
              path="/admin"
              roles={[Role.Admin]}
              component={AdminPage}
            />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/Profile" component={ProfilePage} />

            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/addcategory"
              component={CreateCategory}
            />
            <PrivateRoute
              exact
              path="/editcategory/:id"
              component={EditCategory}
            />
            <PrivateRoute exact path="/courses" component={CourseDashboard} />
            <PrivateRoute exact path="/createCourse" component={CreateCourse} />
            <PrivateRoute
              exact
              path="/updateCourse/:id"
              component={UpdateCourse}
            />
            <PrivateRoute
              exact
              path="/createtopic/:name"
              component={CreateTopic}
            />
            <PrivateRoute exact path="/topiclist" component={TopicList} />
            <PrivateRoute
              exact
              path="/updatetopic/:id"
              component={UpdateTopic}
            />
            {/* Start Quiz Module */}
            <PrivateRoute exact path="/QuizHomePage" component={QuizHomePage} />
            <PrivateRoute
              exact
              path="/TrainerHomePage"
              component={TrainerHomePage}
            />
            <PrivateRoute exact path="/CreateQuiz" component={CreateQuiz} />
            <PrivateRoute exact path="/Viewquiz" component={Viewquiz} />
            <PrivateRoute
              exact
              path="/StudentHomePage"
              component={StudentHomePage}
            />
            <PrivateRoute exact path="/QuizList" component={QuizList} />
            <PrivateRoute
              exact
              path="/UpdateQuestion/:id"
              component={UpdateQuestion}
            />
            <PrivateRoute exact path="/Quiz1" component={Quiz1} />
            <PrivateRoute exact path="/Quiz2" component={Quiz2} />
            <PrivateRoute exact path="/QuizList" component={QuizList} />
              <PrivateRoute exact path="/AdminHomePage" component={AdminHomePage} /> 
              <PrivateRoute exact path="/AdminTrainerHomePage" component={AdminTrainerHomePage} />
              <PrivateRoute exact path="/AdminCreateQuiz" component={AdminCreateQuiz} />
              <PrivateRoute exact path="/AdminViewquiz" component={AdminViewquiz} />
              <PrivateRoute exact path="/AdminStudentHomePage" component={AdminStudentHomePage} />
              <PrivateRoute exact path="/AdminQuizList" component={AdminQuizList}/>
              <PrivateRoute exact path="/AdminQuiz1" component={AdminQuiz1}/>
              <PrivateRoute exact path="/AdminQuiz2" component={AdminQuiz2}/>
            {/* end */}
          </Switch>
        </Router>
      </div>
    </>
  );
}

export { App };
