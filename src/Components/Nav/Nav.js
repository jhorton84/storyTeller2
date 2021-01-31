import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      Nav
      <div className="links">
        <NavLink activeClassname="active" exact to="/">
          Home
        </NavLink>
        <div class="dropdown">
          <button class="dropbtn">
            Game
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <NavLink activeClassname="active" exact to="/dnd">
              DnD
            </NavLink>
            <NavLink activeClassname="active" exact to="/l5r">
              L5R
            </NavLink>
          </div>
        </div>
        <NavLink activeClassname="active" exact to="/$">
          Log In
        </NavLink>
      </div>
    </div>
  );
}
