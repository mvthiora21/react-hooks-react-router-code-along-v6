// NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/login" className="nav-link" activeClassName="active">
        Login
      </NavLink>
    </nav>
  );
}

export default NavBar;