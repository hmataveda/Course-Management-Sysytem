import React from "react";
import { Link } from "react-router-dom";
import { deleteTopic } from "../../actions/topicAction";
import { connect } from "react-redux";
import Proptypes from "prop-types";

const Topic = (props) => {
  const { id, course, topicTitle, description, filename, topicDuration, date } =
    props.topic;

  let filenamenew = filename.replace(/^.*[\\\/]/, "");

  let extension = filename.split(".")[1];

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteTopic(props.topic.id);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="align-items-start ">
          <div
            className="card-header text-center mb-2"
            style={{ backgroundColor: "#c7dbf9" }}
          >
            <b>Course: {course}</b>
          </div>

          <h6>Topic:{topicTitle}</h6>
          <h6>Description: {description}</h6>
          <h6>
            FileName:
            {extension === "pdf" ? (
              <i className="bi bi-file-pdf"></i>
            ) : (
              <i className="bi bi-file-play"></i>
            )}
            &nbsp; {filenamenew} &nbsp;
            <Link to={`src/server/public${filename}`} target="_blank" download>
              {" "}
              <span style={{ fontSize: "1.5rem" }}>
                <i class="bi bi-download"></i>
              </span>
            </Link>
          </h6>
          {/* <h6 s>Duration(min):{topicDuration}</h6> */}
          <h6>Date:{date}</h6>
        </div>
        <div>
          <div className="btn-group gap-2 btn-group-justified align-items-center mt-3">
            <Link to={`/updatetopic/${id}`}>
              <button
                type="button"
                className="btn btn-primary w-10 border rounded-3"
              >
                Update
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-danger w-10 border rounded-3"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
Topic.propTypes = {
  topic: Proptypes.object.isRequired,
  deleteTopic: Proptypes.func.isRequired,
};

export default connect(null, { deleteTopic })(Topic);
