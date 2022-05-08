import React, { Component } from "react";
import "../styles/Quiz.css";
import { getAllQuiz } from "../../actions/quizActions";
import { connect } from "react-redux";
import Proptypes from "prop-types";

class Quiz1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz1: [],
      count: 20,
      isButtonSelected: true,
      correctAnswers: [],
    };
    this.makeTimer();
  }

  handleClick = (event) => {
    let correctAns = this.state.quiz1.filter((correct_ans) => {
      return correct_ans.correct_answer === event.target.value;
    });

    correctAns.map((ans) =>
      this.state.correctAnswers.includes(ans.correct_answer)
        ? console.log("$")
        : this.state.correctAnswers.push(ans.correct_answer)
    );
  };

  async componentDidMount() {
    await this.props.getAllQuiz();
    let filteredquiz = this.props.allQuiz.filter((quiz) => {
      return quiz.quiz_name === "1";
    });
    this.setState({ quiz1: filteredquiz });
  }

  makeTimer() {
    var time = setInterval(() => {
      this.setState({ count: this.state.count - 1 });
      if (this.state.count === 0) {
        clearInterval(time);
        alert(
          `Number of correct answers : ${this.state.correctAnswers.length}`
        );
        this.props.history.push("/QuizList");
      }
    }, 1000);
  }

  handleFinish() {
    clearInterval();
    alert(`Number of correct answers : ${this.state.correctAnswers.length}`);
    this.props.history.push("/QuizList");
  }

  render() {
    return (
      <React.Fragment>
        <div className="container p-3">
          <h3 className="counter">Timer : {this.state.count}</h3>
          <div className="quiz-card ">
            {this.state.quiz1.map((quiz, i) => {
              return (
                <div className="card p-3 mb-2" key={i}>
                  <h5 className="card-title">{quiz.question}</h5>
                  {quiz.answers.map((ans, i) => {
                    return (
                      <div
                        className="radio-inp p-3"
                        onChange={this.handleClick.bind(this)}
                      >
                        <input
                          type="radio"
                          className="form-check-input"
                          value={ans}
                          name={quiz.id}
                        />{" "}
                        {ans}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <button
              className="btn btn-warning"
              onClick={this.handleFinish.bind(this)}
            >
              Finish Quiz
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Quiz1.prototypes = {
  getAllQuiz: Proptypes.func.isRequired,
  allQuiz: Proptypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  allQuiz: state.combinedReducerQuiz.items,
});

export default connect(mapStateToProps, { getAllQuiz })(Quiz1);
