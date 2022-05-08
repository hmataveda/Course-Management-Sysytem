import React from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCourses, deleteCourse, bulkDelete } from "../actions/courseActions";
import Course from "./Course";
import "../components/styles/pagination.css";

class CourseDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseList: [],
      isAscending: true,
      searchValue: "",
      offset: 0,
      perPage: 6,
      currentPage: 0,
    };
  }

  componentDidMount() {
    this.props.getCourses();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.courses) {
      this.setState({
        courseList: nextProps.courses,
      });
    }
  }

  deleteHandler = (id) => {
    this.props.deleteCourse(id);
  };

  handleBulkDelete = () => {
    const { courseList } = this.state;
    const temp = courseList
      .filter((course) => course.selected)
      .map((ele) => ele.id);
    this.props.bulkDelete(temp);
  };

  selectAll = () => {
    const { courseList } = this.state;
    const temp = [...courseList];
    temp.forEach((ele, index) => {
      temp[index].selected = !temp[index].selected;
    });
    this.setState({
      courseList: [...temp],
    });
  };

  handleToggle = (arr, id) => {
    arr.forEach((course, index) => {
      if (id === course.id) {
        arr[index].selected = !arr[index].selected;
      }
    });
    return arr;
  };

  handleCheckbox = (id) => {
    const { courseList } = this.state;
    const temp = this.handleToggle([...courseList], id);

    this.setState({
      courseList: [...temp],
    });
  };

  handleSorting = () => {
    const { courseList, isAscending } = this.state;
    const sortedCourse = courseList.sort(
      (a, b) => b.courseCreationDate - a.courseCreationDate
    );
    const displayArray = isAscending ? sortedCourse : sortedCourse.reverse();
    this.setState((prevState) => ({
      courses: displayArray,
      isAscending: !prevState.isAscending,
    }));
  };

  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset,
    });
  };

  render() {
    const { courseList, isAscending, searchValue } = this.state;
    const pageCount = Math.ceil(courseList.length / this.state.perPage);

    return (
      <div>
        <nav className="navbar navbar-light bg-light  sticky-top">
          <div className="container-fluid">
            <div>
              <input
                type="checkbox"
                onChange={() => this.selectAll()}
                className="ms-3"
              />
              <span className="ms-2 ">Select All</span>

              <i
                onClick={() => {
                  let result = window.confirm("Are you sure to delete coure ?");
                  if (result) {
                    this.handleBulkDelete();
                  }
                }}
                className="bi bi-trash ms-2 text-danger"
              ></i>

              <Link
                to="/createCourse"
                className="fs-3 ms-3"
                title="Create Course"
              >
                <i className="bi bi-plus-circle text-success"></i>
              </Link>
            </div>

            <p className="h2 fw-bolder">Courses </p>
            <div>
              <input
                className="search-bar"
                onChange={this.handleChange}
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn ms-2 me-3" onClick={this.handleSorting}>
                {isAscending ? (
                  <i className="bi bi-sort-down-alt"></i>
                ) : (
                  <i className="bi bi-sort-up"></i>
                )}
                Sort
              </button>
            </div>
          </div>
        </nav>

        <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
          {courseList.length > 0 &&
            courseList
              .map((course) => {
                if (
                  course.courseTitle.toLowerCase().indexOf(searchValue) != -1
                ) {
                  return (
                    <Course
                      course={course}
                      deleteCourse={this.deleteHandler}
                      handleCheckbox={this.handleCheckbox}
                    />
                  );
                }
              })
              .slice(this.state.offset, this.state.offset + this.state.perPage)}
        </div>
        <div className="d-flex justify-content-center">
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={"pagination justify-content-end"}
            onPageChange={this.handlePageClick}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses.courses,
});

export default connect(mapStateToProps, {
  getCourses,
  deleteCourse,
  bulkDelete,
})(CourseDashboard);
