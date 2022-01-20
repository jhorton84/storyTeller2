import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      Nav
      <div className="links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <div className="dropdown">
          <button className="dropbtn">
            Game
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink exact to="/dnd">
              DnD
            </NavLink>
            <NavLink exact to="/l5r">
              L5R
            </NavLink>
          </div>
        </div>
        <NavLink exact to="/$">
          Log In
        </NavLink>
      </div>
    </div>
  );
}
