import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";
import TrainerNavBar from "../Pages/TrainerNavBar";
import "../styles/TrainerHomePage.css";
import AddQuestion from "./AddQuestion";

export default class TrainerHomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container p-4">
          <TrainerNavBar />

          <div className="bg-light mt-4 p-4 ">
            <h3>Instructions to create Quiz Questions</h3>
            <ul>
              <li>
                Enter Course, Category, Topic and Difficulty Level of choice
              </li>
              <li>Enter the Question along with multiple answers</li>
              <li>Enter the correct answer</li>
              <li>Submit</li>
            </ul>
            <Link to="/CreateQuiz">
              <button className="btn btn-success">Create New Quiz</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
