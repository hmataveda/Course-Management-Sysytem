import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminNavBar from '../../components/Pages/AdminNavBar.js';
import "../styles/QuizList.css";

export default class AdminQuizList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <AdminNavBar />
          <div className="quiz-container bg-light mt-4 p-4">
            <form>
              <h3>List of Quizes</h3>
              <ul className="list-group hover">
              <Link to="/AdminQuiz1" className="text-decoration-none">
                <li className="border mt-2  w-25 list-group-item list-group-item-success list-group-item-action ">Quiz 1</li>
              </Link>
              <br />
              <Link to="/AdminQuiz2" className="text-decoration-none">
                <li className="border mt-2 w-25 list-group-item list-group-item-success list-group-item-action">Quiz 2</li>
              </Link>
              </ul>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
