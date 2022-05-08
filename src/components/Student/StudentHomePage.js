import React from "react";
import Footer from "../Pages/Footer";
import NavBar from "../Pages/NavBar";
import "../../components/styles/StudentHomePage.css";

function StudentHomePage() {
  return (
    <React.Fragment>
      <div className="container p-4 ">
        <NavBar />
        <div className="home-cont mt-4 bg-light p-4 ">
          <h3>QUIZ INSTRUCTIONS</h3>
          <ul>
            <li>On entering the quiz page timer will start automatically.</li>
            <li>Complete the quiz before the time finishes.</li>
            <li>
              The result for your quiz is shown after completing the timer.
            </li>
            <li>
              Once timer completes the quiz will be finished and logged out.
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StudentHomePage;
