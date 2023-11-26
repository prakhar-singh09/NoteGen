import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
      <li className="nav-start">
          <NavLink to="/" className="nav-link">Notespace</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Notes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">About Us</NavLink>
        </li>
         
        <li className="nav-last">
          <NavLink to="/" className="nav-link">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
