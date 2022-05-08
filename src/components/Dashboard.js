import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCategories } from "../actions/categoryActions";

import CategoryDisplay from "./CategoryDisplay";
import SearchData from "./SearchData";
import JsonExport from "./JsonExport";
import AddButton from "../components/Buttons/AddButton";
import SortCategory from "./SortCategory";
import ReactPaginate from "react-paginate";

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 0,
      usersPerPage: 5,
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const categories = this.props.category.categories;
    const sorted = categories.sort((a, b) => {
      return b.id - a.id;
    });
    const pagesVisited = this.state.pageNumber * this.state.usersPerPage;
    const pageCount = Math.ceil(categories.length / this.state.usersPerPage);

    const changePage = ({ selected }) => {
      this.setState({ pageNumber: selected });
    };

    return (
      <>
        <div className="container mt-4">
          <div className="col-md-8 m-auto">
            <h1 className="text-center">Course Categories</h1>
            <hr />
            <div className="row d-flex justify-content-evenly">
              <div className="col-md-6 ">
                <SearchData />
              </div>

              <div className="col-md-4 text-center">
                <SortCategory />
              </div>
              <div className="col-md-1 text-center">
                <AddButton />
              </div>
              <div className="col-md-1 text-center ">
                <JsonExport />
              </div>
            </div>

            <div className="row">
              {sorted
                .slice(pagesVisited, pagesVisited + this.state.usersPerPage)
                .map((category) => (
                  <CategoryDisplay key={category.id} category={category} />
                ))}
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination justify-content-end"}
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
      </>
    );
  }
}
Dashboard.propTypes = {
  category: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.categories,
});

export default connect(mapStateToProps, { getCategories })(Dashboard);
