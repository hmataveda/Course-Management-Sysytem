import React, { Component } from "react";
import { Link } from "react-router-dom";

class Course extends Component {
  render() {
    const { course, deleteCourse, handleCheckbox } = this.props;
    const date = course.courseCreationDate;
    let formatedDate = null;
    typeof date === 'string' ?
      formatedDate= date :
      formatedDate =`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`

    return (
      <div className="col">
        <div className="card w-100  mb-2">
          <div className="card-body alert-warning border-warning ">
            <p className="card-title pb-4 h4 fw-bolder">{course.courseTitle}</p>
            <p className="card-text">
              {course.courseDescription}
            </p>

            <p style={{ float: "left" }}>
              <Link to={`/updateCourse/${course.id}`} className="btn ">
                <i className="bi bi-pencil-square"></i>
              </Link>
              <button onClick={()=> {
              let result = window.confirm("Are you sure to delete course ?")
              if (result) {
                deleteCourse(course.id)
              }
            }} className="btn ">
                <i  className="bi bi-trash"></i>
              </button>
            </p>
            <p className="pt-2 " style={{ textAlign: "end" }}>
              {formatedDate}
            </p>

            <input
              type="checkbox"
              checked={course.selected}
              onChange={() => handleCheckbox(course.id)}
              style={{ float: "right" }}
            />
                
          </div>
          <div>
        <Link to={`/createtopic/${course.courseTitle}`}>
                  <li className='mb-2 btn btn-primary w-100 ' style={{backgroundColor:'#86806c', borderColor:'#86806c'}}>Add Topic</li>
                </Link>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Course;
