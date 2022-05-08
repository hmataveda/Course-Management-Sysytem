import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminNavBar from '../../components/Pages/AdminNavBar.js'
import "../styles/TrainerHomePage.css";

export default class AdminTrainerHomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <AdminNavBar />

          <div className=" bg-light mt-4 p-4 ">
            <h3>Instructions to create Quiz Questions</h3>
            <ul>
              <li>
                Enter Course, Category, Topic and Difficulty Level of choice
              </li>
              <li>Enter the Question along with multiple answers</li>
              <li>Enter the correct answer</li>
              <li>Submit</li>
            </ul>
            <Link to="/AdminCreateQuiz">
              <button className="btn btn-success">Create New Quiz</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
