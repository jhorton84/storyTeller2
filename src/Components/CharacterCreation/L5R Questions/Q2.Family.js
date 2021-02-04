import React from 'react';
import { NavLink } from 'react-router-dom';

function Q2Family() {
  return (
    <div className="Q1Clan-component card">
      Choose a Family
      <div className="card-details">
        <NavLink exact to={`/character-creation-L5R`}>
          <button>Prev</button>
        </NavLink>
        <NavLink exact to={`/character-creation-L5R/School`}>
          <button>Next</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Q2Family;
