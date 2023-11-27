import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

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
        <Button className ="nav-last" variant="outlined">Logout</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
