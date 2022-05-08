import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteCategory } from "../actions/categoryActions";

export class CategoryDisplay extends Component {
  handleClick = (id) => {
    let result = window.confirm("Are you sure to delete category ?");
    if (result) {
      this.props.deleteCategory(id);
    }
  };

  render() {
    const category = this.props.category;

    return (
      <>
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-lg-10 col-md-4 col-8">
              <Link to="/courses" className="text-decoration-none text-dark ">
                <h3 className="category-title h3">{category.categoryName}</h3>
              </Link>
              <p>{category.categoryDesc}</p>
              <p>{category.createdAt}</p>
            </div>

            <div className="col-md-3 col-lg-2  ">
              <ul className="list-group ">
                <Link to={`/editcategory/${category.id}`}>
                  <li className="mb-2 btn btn-primary w-100   ">Edit</li>
                </Link>

                <li
                  className="mb-2 btn btn-danger w-100"
                  onClick={this.handleClick.bind(this, category.id)}
                >
                  Delete
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
CategoryDisplay.propTypes = {
  deleteCategory: PropTypes.func.isRequired,
};

export default connect(null, { deleteCategory })(CategoryDisplay);
