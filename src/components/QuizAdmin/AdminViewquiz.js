import React, { Component } from "react";
import { getAllQuiz, deleteQuiz } from "../../actions/quizActions";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Viewquiz.css";
import AdminNavBar from '../../components/Pages/AdminNavBar.js';

class AdminViewquiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuiz: [],
    };
  }
  componentDidMount() {
    this.props.getAllQuiz();
  }

  handleDeleteClick = (id, index) => {
    let ques = this.props.allQuiz.filter((val) => {
      return val.id === id;
    });
    let q = ques.map((item) => {
      return item.topic;
    });
    let result = window.confirm(
      `Are you sure you want to delete the question under this topic: ${q}`
    );
    if (result) {
      let splicedQuiz = this.props.allQuiz.splice(index, 1);
      this.props.deleteQuiz(id);
    }
  };

  render() {
    return (
      <React.Fragment>
        <AdminNavBar />
        <div className="view-quiz container">
            <div className="quiz-questn">
            <div className="create-quiz pt-2 mb-2">
              <Link
                to="/AdminCreateQuiz"
                className="create-quiz-btn btn btn-success"
              >
                CREATE QUIZ
              </Link>
            </div>
            {this.props.allQuiz.map((quiz, index) => {
              return (
                <div
                  className="card quiz bg-tertiary p-3 mb-2 bg-light"
                  key={quiz.id}
                >
                  <div className=" card-body quiz-actions justify-content-end d-flex  gap-3">
                    <Link to={`/UpdateQuestion/${quiz.id}`}>
                      <button className="btn btn-primary btn-sm">UPDATE</button>
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={this.handleDeleteClick.bind(
                        this,
                        quiz.id,
                        index
                      )}
                    >
                      DELETE
                    </button>
                  </div>
                  <div className="quiz-data">
                    <p>
                      <b>Course : </b>
                      {quiz.course}
                    </p>
                    <p>
                      <b>Category : </b>
                      {quiz.category}
                    </p>
                    <p>
                      <b>Topic : </b>
                      {quiz.topic}
                    </p>
                    <p>
                      <b>Question : </b>
                      {quiz.question}
                    </p>
                    <p>
                      <b>Correct Answer : </b>
                      {quiz.correct_answer}
                    </p>
                  </div>
                  <div className="quiz-ans d-flex">
                    {quiz.length !== 0 ? (
                      quiz.answers.map((ans, i) => {
                        return (
                          <div className="ans d-flex gap-2 flex-row" key={i}>
                            <div className="ans-btn btn-light border m-2 btn-sm">
                              {ans}
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p>No answers found</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AdminViewquiz.prototypes = {
  getAllQuiz: Proptypes.func.isRequired,
  allQuiz: Proptypes.array.isRequired,
  deleteQuiz: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allQuiz: state.combinedReducerQuiz.items,
});

export default connect(mapStateToProps, { getAllQuiz, deleteQuiz })(AdminViewquiz);
