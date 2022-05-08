import React, { Component } from 'react';

import { connect } from 'react-redux';
import { searchCategory } from '../actions/categoryActions';

export class SearchData extends Component {
  onChange = (e) => {
    this.props.searchCategory(e.target.value);
  };

  render() {
    return (
      <>
        <form>
          <input
            type='text'
            name='searchCategory'
            className='form-control mb-3'
            placeholder='Search user by name'
            onChange={this.onChange}
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.categories.categories,
});

export default connect(mapStateToProps, { searchCategory })(SearchData);
