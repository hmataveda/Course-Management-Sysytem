import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../../App/App.css";

export default function Navbar() {
  const history = useHistory();

  function handlelogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("currentUser");
    window.location.reload(false);
    history.push("/login");
  }

  function handleQuizLogin() {
    let user = JSON.parse(localStorage.getItem("user"));
    let role = user.role;
    if (role === "admin") {
      history.push("/AdminHomePage");
    } else if (role === "trainer") {
      history.push("/TrainerHomePage");
    } else {
      history.push("/StudentHomePage");
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning px-4">
        <Link className="navbar-brand" to="/dashboard">
          Course Management System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/dashboard">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/topiclist">
                Topic List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/admin">
                User
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link active" to="/QuizHomePage"> */}
              <a className='nav-link active' onClick={handleQuizLogin}> Quiz</a>
              {/* </Link> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">
                Logout
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handlelogout}
              ></button>
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/addcategory'>
                Add Category
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
