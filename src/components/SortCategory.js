import React, { Component } from 'react';

import { sortCategory } from '../actions/categoryActions';

import { connect } from 'react-redux';

export class SortCategory extends Component {
  onChange = (e) => {
    this.props.sortCategory(e.target.value);
  };

  render() {
    return (
      <>
        <select name='' id='' className='form-select' onChange={this.onChange}>
          <option>Filter Data</option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.categories,
});

export default connect(mapStateToProps, { sortCategory })(SortCategory);
