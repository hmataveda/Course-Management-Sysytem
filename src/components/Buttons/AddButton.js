import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function AddButton() {
  return (
    <>
      <Link to='/addcategory'>
        <FontAwesomeIcon
          icon={faPlus}
          className='text-success fs-3'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          title='Add Category'
        />
      </Link>
    </>
  );
}
