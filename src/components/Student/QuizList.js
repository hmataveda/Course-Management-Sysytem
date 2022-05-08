import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";
import NavBar from "../Pages/NavBar";
import "../styles/QuizList.css";
import quizbg from "../../images/quizbg.png";

export default class QuizList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container p-4">
          <NavBar />

          <div className="quiz-container mt-4 bg-light p-4">
            <form>
              <h3>List of Quizes</h3>
              <ul className="list-group hover">
                <Link to="/Quiz1" className="text-decoration-none">
                  <li className="border mt-2  w-25 list-group-item list-group-item-success list-group-item-action ">
                    Quiz 1
                  </li>
                </Link>
                <br />
                <Link to="/Quiz2" className="text-decoration-none">
                  <li className="border mt-2 w-25 list-group-item list-group-item-success list-group-item-action">
                    Quiz 2
                  </li>
                </Link>
              </ul>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
