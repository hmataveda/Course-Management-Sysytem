import React, { Component } from "react";

import { getCategory, updateCategory } from "../actions/categoryActions";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import BackButton from "./Buttons/BackButton";

class EditCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      categoryName: "",
      categoryDesc: "",
      createdAt: "",
      errors: {},
    };
  }

  componentWillReceiveProps(NextProps) {
    if (NextProps.errors) {
      this.setState({ errors: NextProps.errors });
    }

    const { id, categoryDesc, categoryName, createdAt } = NextProps.categories;
    this.setState({ id, categoryDesc, categoryName, createdAt });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCategory(id);
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.categoryName === "" ||
      this.state.categoryDesc === "" ||
      this.state.createdAt === ""
    ) {
      alert("All Fields Are Mandatory!!");
    } else {
      const editCategory = {
        id: this.state.id,
        categoryName: this.state.categoryName,
        categoryDesc: this.state.categoryDesc,
        createdAt: this.state.createdAt,
      };
      this.props.updateCategory(
        this.state.id,
        editCategory,
        this.props.history
      );
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <div className="container mt-4">
          <div className="row text-center">
            <div className="col-md-6 text-center m-auto">
              <h1 className="text-center">Edit Category</h1>
              <hr />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 m-auto">
              <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Id
                  </label>
                  <input
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors.id,
                    })}
                    placeholder="Enter id"
                    name="id"
                    value={this.state.id}
                    onChange={this.handleChange}
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Category Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category Name"
                    name="categoryName"
                    value={this.state.categoryName}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Category Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category Id"
                    name="categoryDesc"
                    value={this.state.categoryDesc}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Created On
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter Date"
                    name="createdAt"
                    value={this.state.createdAt}
                    onChange={this.handleChange}
                  />
                </div>
                <input type="submit" className="btn btn-success  mt-2" />
                <span className="mx-2">
                  <BackButton />
                </span>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

EditCategory.propType = {
  getCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories.category,
});
export default connect(mapStateToProps, { getCategory, updateCategory })(
  EditCategory
);
