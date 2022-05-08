import React, { Component } from "react";
import "../styles/HomePage.css";

export default class QuizHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.value === "trainer") {
      this.props.history.push("/TrainerHomePage");
    } else if (this.state.value === "student") {
      this.props.history.push("/StudentHomePage");
    } else {
      alert("User Not Exist");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container ">
          <div className="user-login col-md-4 m-auto border border-dark p-4">
            <form className="login" onSubmit={this.handleSubmit}>
              <div className="form-group mb-2">
                <label>USER ID</label>
              </div>

              <input
                type="text"
                onChange={this.handleChange}
                className="form-control xs"
              />

              <button type="submit" className="btn btn-warning mt-2">
                Login
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
