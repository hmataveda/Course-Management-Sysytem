import React, { Component } from "react";
import "../styles/AddQuestion.css";
import { connect } from "react-redux";
import { createQuiz } from "../../actions/quizActions";
import { PropTypes } from "prop-types";

class AddQuestion extends Component {
  constructor() {
    super();
    this.state = {
      quiz_name: "",
      category: "",
      topic: "",
      question: "",
      answers: "",
      correct_answer: "",
      difficulty_level: "",
      course: "",
    };
  }

  handleChange = (event) => {
    console.log(event, "evvv");
    if (event.target.name === "answers") {
      console.log(event.target.value, "anss");
      let value = event.target.value;
      let splitValue = value.split(",");
      this.setState({ answers: splitValue });
      console.log(splitValue, "splitValue");
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.quiz_name === "" ||
      this.state.category === "" ||
      this.state.topic === "" ||
      this.state.question === "" ||
      this.state.answers === "" ||
      this.state.correct_answer === "" ||
      this.state.difficulty_level === "" ||
      this.state.course === ""
    ) {
      alert("All the fields are required!!!");
    } else {
      const quiz = {
        quiz_name: this.state.quiz_name,
        category: this.state.category,
        topic: this.state.topic,
        question_type: this.state.question_type,
        question: this.state.question,
        answers: this.state.answers,
        correct_answer: this.state.correct_answer,
        difficulty_level: this.state.difficulty_level,
        course: this.state.course,
      };

      this.props.createQuiz(quiz);
    }
  };

  render() {
    return (
      <div className="q-con">
        <form onSubmit={this.handleSubmit}>
          <label>Quiz ID</label>
          <input
            type="text"
            className="form-control"
            name="quiz_name"
            value={this.state.quiz_name}
            onChange={this.handleChange}
          />
          <br />

          <label>Course</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Counse "
            name="course"
            value={this.state.course}
            onChange={this.handleChange}
          />
          <br />

          <label>Category</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter any one Course among this : Coding, Science, Geography, Mathematics"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          />
          <br />

          <label className="form-label">Topic</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter topics related to category"
            name="topic"
            value={this.state.topic}
            onChange={this.handleChange}
          />
          <br />

          <label className="form-label">Question</label>
          <textarea
            type="text"
            className="form-control"
            name="question"
            onChange={this.handleChange}
            value={this.state.question}
          />
          <br />

          <label className="form-label">Answers</label>
          <input
            type="text"
            className="form-control"
            placeholder={"seperate each option by comma(',')"}
            name="answers"
            onChange={this.handleChange.bind(this)}
          />
          <br />

          <label className="form-label">Correct Answer</label>
          <input
            type="text"
            className="form-control"
            value={this.state.correct_answer}
            name="correct_answer"
            onChange={this.handleChange}
          />
          <br />

          <label className="form-label">Difficulty Level</label>
          <select
            className="form-select"
            value={this.state.difficulty_level}
            name="difficulty_level"
            onChange={this.handleChange}
          >
            <option defaultValue>Select...</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Difficult">Difficult</option>
          </select>
          <br />

          <button
            type="submit"
            data-bs-dismiss="modal"
            className="btn btn-primary"
          >
            Add Question
          </button>
        </form>
      </div>
    );
  }
}

AddQuestion.propTypes = {
  createQuiz: PropTypes.func.isRequired,
};
const mapStatetoProps = (state) => ({
  createQuiz: state.createQuiz,
});

export default connect(mapStatetoProps, { createQuiz })(AddQuestion);
