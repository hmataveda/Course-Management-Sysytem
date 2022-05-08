import React from 'react';
import { Link } from 'react-router-dom';
import '../../App/App.css';

export default function Navbar1() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-warning px-4'>
        <Link className='navbar-brand' to='/dashboard'>
          Course Management System
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          
        </div>
      </nav>
    </div>
  );
}
