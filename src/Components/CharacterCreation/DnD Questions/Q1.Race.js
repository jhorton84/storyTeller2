import React from 'react';
import { NavLink } from 'react-router-dom';

function Q1Race() {
  // const gameInfo = gameApi.game.DnD.campaigns;
  return (
    <div className="Q1Race-component">
      Q1Race Component
      <NavLink exact to={`/character-creation-DnD/q2`}>
        <button>Next</button>
      </NavLink>
    </div>
  );
}

export default Q1Race;
