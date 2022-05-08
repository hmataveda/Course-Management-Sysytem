import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createCourse } from "../actions/courseActions";

class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseTitle: "",
      courseDescription: "",
      courseCreationDate: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { createCourse, history } = this.props;
    const { courseTitle, courseDescription, courseCreationDate } = this.state;
    const newCourse = {
      courseTitle,
      courseDescription,
      courseCreationDate: new Date(courseCreationDate),
    };
    e.preventDefault();
    createCourse(newCourse, history);
  };

  render() {
   
    const { courseTitle, courseDescription, courseCreationDate } = this.state;

    return (
      <div className="container">
        <h1 className="mt-2">Create Course</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="courseTitle"
            placeholder="Course Title"
            className="form-control"
            value={courseTitle}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="courseDescription"
            placeholder="Course Description"
            className="form-control"
            value={courseDescription}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="date"
            name="courseCreationDate"
            placeholder="Creation Date"
            className="form-control"
            value={courseCreationDate}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            disabled={!(courseTitle || courseDescription || courseCreationDate)}
          />
          <Link to="/courses" className="btn alert-dark ms-2">
            Back
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.course,
  };
};

export default connect(mapStateToProps, { createCourse })(CreateCourse);
