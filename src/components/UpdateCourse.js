import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getCourse, updateCourse} from '../actions/courseActions'

class UpdateCourse extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courseTitle: '',
      courseDescription: '',
      courseCreationDate: ''
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount(){
    const { id } = this.props.match.params
    this.props.getCourse(Number(id));
    const { courseTitle, courseDescription, courseCreationDate} = this.props.course
    const date = courseCreationDate;
    const formatedDate = date && date.toLocaleDateString("en-GB",{
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).split('/').reverse().join("-")

    this.setState(()=>({
      courseTitle, 
      courseDescription, 
      courseCreationDate: formatedDate
    }))
  }

  componentWillReceiveProps(nextProps){
    const { courseTitle, courseDescription, courseCreationDate} = nextProps.course
    const date = courseCreationDate;
    const formatedDate = date.toLocaleDateString("en-GB",{
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).split('/').reverse().join("-")

    this.setState(()=>({
      courseTitle, 
      courseDescription, 
      courseCreationDate: formatedDate
    }))
  }

  handleSubmit = (e)=>{
    const { courseTitle, courseDescription } = this.state
    const { id } = this.props.match.params
    e.preventDefault();
    const updateObj = {
      ...this.state,
      courseTitle,
      courseDescription,
    }
    this.props.updateCourse(updateObj, Number(id), this.props.history)
  }

  render() {
    const { courseTitle, courseDescription, courseCreationDate } = this.state
    return (
      <div className="container">
        <h1 className="mt-2">Update Course</h1>
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
          /> <br />
          <input 
            type="text" 
            name="courseDescription" 
            placeholder="Course Description" 
            className="form-control"
            value={courseDescription}
            onChange={this.handleChange}
            required
          /> <br />
          <input 
            type="date" 
            name="courseCreationDate" 
            placeholder="Creation Date" 
            className="form-control" 
            value={courseCreationDate}
            onChange={this.handleChange}
            required
            disabled
          /> <br />
          <input 
            type="submit" 
            value="Update"
            className="btn btn-primary align-center"
            disabled={!(courseTitle || courseDescription || courseCreationDate)}
          />
          <Link to='/courses' className="btn alert-dark ms-2">
            Back
          </Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps= state=>({
  course: state.courses.course
})


export default connect(mapStateToProps, { getCourse, updateCourse })(UpdateCourse)