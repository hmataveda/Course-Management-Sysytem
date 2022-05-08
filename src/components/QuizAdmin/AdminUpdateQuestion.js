import React, { Component } from "react";
import { getQuiz, updateQues } from "../../actions/quizActions";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import AdminNavBar from '../../components/Pages/AdminNavBar.js'

class UpdateQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz_name: "",
      category: "",
      topic: "",
      question: "",
      answers: "",
      correct_answer: "",
      difficulty_level: "",
      targetName: "",
      course: "",
    };
  }

  componentWillReceiveProps(NextProps) {
    const {
      quiz_name,
      category,
      topic,
      question,
      answers,
      correct_answer,
      difficulty_level,
      course,
    } = NextProps.items;
    this.setState({
      quiz_name,
      category,
      topic,
      question,
      answers,
      correct_answer,
      difficulty_level,
      course,
    });
    console.log("recieved", quiz_name);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.quiz_name === "" ||
      this.state.course === "" ||
      this.state.category === "" ||
      this.state.topic === "" ||
      this.state.question === "" ||
      this.state.answers === "" ||
      this.state.correct_answer === "" ||
      this.state.difficulty_level === ""
    ) {
      alert("All the fields are required!!!");
    } else {
      const updateQuestion = {
        quiz_name: this.state.quiz_name,
        category: this.state.category,
        topic: this.state.topic,
        question: this.state.question,
        answers: this.state.answers,
        correct_answer: this.state.correct_answer,
        difficulty_level: this.state.difficulty_level,
        course: this.state.course,
      };

      this.props.updateQues(
        this.props.match.params.id,
        updateQuestion,
        this.props.history
      );
    }
  };

  handleChange = (e) => {
    if (e.target.name === "answers") {
      let ans = e.target.value;
      let arr = ans.split(",");
      console.log("result", arr);
      this.setState({ answers: arr });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getQuiz(id);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <AdminNavBar />

          <div className="q-con p-4 bg-light mt-2">
            <form onSubmit={this.handleSubmit}>
              <label>Quiz Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Quiz Name"
                name="quiz_name"
                value={this.state.quiz_name}
                onChange={this.handleChange}
              />
              <br />

              <label>Course</label>
              <input
                type="text"
                className="form-control"
                placeholder="Update course"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
              />
              <br />

              <label>Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="update any Course among this : Coding, Science, Geography, Mathematics"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              />
              <br />

              <label className="form-label">Topic</label>
              <input
                type="text"
                className="form-control"
                placeholder="update topics related to category"
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
                value={this.state.question}
                onChange={this.handleChange}
              />
              <br />

              <label className="form-label">Answers</label>
              <input
                type="text"
                className="form-control"
                placeholder={"seperate each option by comma(',')"}
                name="answers"
                value={this.state.answers}
                onChange={this.handleChange.bind(this)}
              />
              <br />

              <label className="form-label">Correct Answer</label>
              <input
                type="text"
                className="form-control"
                name="correct_answer"
                value={this.state.correct_answer}
                onChange={this.handleChange}
              />
              <br />

              <label className="form-label">Difficulty Level</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="difficulty_level"
                value={this.state.difficulty_level}
                onChange={this.handleChange}
              >
                <option>{this.state.difficulty_level}</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Difficult">Difficult</option>
              </select>
              <br />

              <button type="submit" className="btn btn-success">
                Update Question
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

UpdateQuestion.propTypes = {
  updateQues: Proptypes.func.isRequired,
  getQuiz: Proptypes.func.isRequired,
  items: Proptypes.array.isRequired,
};

const mapStateToProp = (state) => ({
  items: state.combinedReducerQuiz.item,
});

export default connect(mapStateToProp, { getQuiz, updateQues })(UpdateQuestion);
