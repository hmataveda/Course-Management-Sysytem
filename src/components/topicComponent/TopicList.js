import React from "react";
import Topic from "./Topic";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { fetchTopics } from "../../actions/topicAction";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export class TopicList extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "React JS",
      filterTopic: "",
      ans: true,
    };
  }

  componentDidMount() {
    this.props.fetchTopics();
  }
  handlefiltertopic = (e) => {
    this.setState({ filterTopic: e.target.value });

    if (this.state.filterTopic.length > 0) {
      this.setState({ ans: false });
    }
  };
  render() {
    let arr = this.props.courses.map((item) => item.courseTitle);
    let unique = [...new Set(arr)];

    return (
      <>
        <React.Fragment>
          <Navbar />
          <div
            className="m-3 border rounded-2 mx-auto"
            style={{ width: "90%" }}
          >
            <div
              style={{ width: "90%" }}
              className="align-items-center mx-auto mb-4"
            >
              <h1 style={{ paddingLeft: "45%" }}>TopicList</h1>
              <hr />
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between gap-2">
                  <select
                    className="col-md-6 pe-1 w-5 form-select"
                    name="course"
                    onChange={(e) => this.setState({ filter: e.target.value })}
                  >
                    <option>Filter By course</option>
                    {unique.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                  <input
                    type="text"
                    className="text-center form-control"
                    value={this.state.filterTopic}
                    name="filterTopic"
                    onChange={this.handlefiltertopic}
                    placeholder="Search By Topic"
                  />
                </div>
                <div className="text-end">
                  <Link to={`/createtopic/`}>
                    <button
                      type="button"
                      className="btn btn-primary mb-2 border rounded-3"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        backgroundColor: "#c7dbf9",
                        display: "none",
                      }}
                    >
                      Create New Topic
                    </button>
                  </Link>
                </div>
              </div>
              {/* <ul className="list-group"> */}
              <div className="card-group mt-2">
                {this.state.ans
                  ? this.props.topics
                    ? this.props.topics
                        .filter((item) => item.course == this.state.filter)
                        .map((topic) => {
                          return (
                            <div key={topic.id} className="col-sm-4">
                              <div
                                className="card m-1 border border-4 d-flex"
                                style={{ height: "300px" }}
                              >
                                <div className="card-body ">
                                  <Topic topic={topic} />
                                  {/* <li className="list-group-item" key={topic.id}><Topic topic={topic} /></li> */}
                                </div>
                              </div>
                            </div>
                          );
                        })
                    : null
                  : this.props.topics
                  ? this.props.topics
                      .filter((item) =>
                        item.topicTitle.includes(this.state.filterTopic)
                      )
                      .map((topic) => {
                        return (
                          <div key={topic.id} className="col-sm-4">
                            <div
                              className="card m-1 border border-4 d-flex"
                              style={{ height: "300px" }}
                            >
                              <div className="card-body">
                                <Topic topic={topic} />
                                {/* <li className="list-group-item" key={topic.id}><Topic topic={topic} /></li> */}
                              </div>
                            </div>
                          </div>
                        );
                      })
                  : null}
              </div>
            </div>
          </div>
          {/* <Link to="/files/javascript_tutorial.pdf" target="_blank" download>Download</Link> */}
        </React.Fragment>
      </>
    );
  }
}

TopicList.propTypes = {
  topics: Proptypes.object.isRequired,
  fetchTopics: Proptypes.func.isRequired,
};
const mapStateToProps = (state) => {
  console.log("topic list mapstate to props", state);
  return {
    topics: state.topicReducer.topics,
    courses: state.courses.courses,
  };
};

export default connect(mapStateToProps, { fetchTopics })(TopicList);
