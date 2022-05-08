import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/CreateQuiz.css";
import AddQuestion from "../Trainer/AddQuestion";
import AdminNavBar from "../../components/Pages/AdminNavBar.js";

export default class AdminCreateQuiz extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <AdminNavBar />
          <div className="createquiz">
            {/* <!-- Button trigger modal --> */}
            <div className="text-center">
              <button
                type="button"
                className="btn btn-warning mt-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Question
              </button>
            </div>
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      New Question
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <AddQuestion />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
