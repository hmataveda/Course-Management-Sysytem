import React, { useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { getCategories } from '../actions/categoryActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const headers = [
  { label: 'Id', key: 'id' },
  { label: 'Creation Date', key: 'createdAt' },
  { label: 'Category Name', key: 'categoryName' },
  { label: 'Category Id', key: 'categoryId' },
];

function JsonExport(props) {
  useEffect(() => {
    props.getCategories();
  }, []);

  const categories = props.category.categories;

  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: categories,
  };
  return (
    <>
      <CSVLink {...csvReport}>
        <FontAwesomeIcon
          icon={faDownload}
          className='text-primary fs-3'
          title='Download List'
        />
      </CSVLink>
    </>
  );
}
JsonExport.propTypes = {
  category: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.categories,
});

export default connect(mapStateToProps, { getCategories })(JsonExport);
