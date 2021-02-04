import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Q1Clan from './L5R Questions/Q1.Clan';
import CharacterSheet from './CharacterSheet';
import ClanInfo from './L5R Questions/Q1.ClanInfo';

// child of CharacterCreation. This component is responsible for rendering dynamically the questions for
// creating a Legend of the Five Rings character.
function CharacterCreationL5R({ characterCreation }) {
  // Hook for setting the state of the clan which is then sent down to the Q1Clan child.
  const [clan, setClan] = useState('Crab');

  return (
    <div className="CharacterCreationL5R">
      <h3>Legend of the Five Rings</h3>
      <h4>Character Creation</h4>
      {/* <CharacterSheet /> */}
      <div className="main-container row">
        <Q1Clan clans={characterCreation[0].clans} setClan={setClan} clan={clan} />
        <div className="clanInfo">
          <ClanInfo clanName={clan} clansInfo={characterCreation[0].clans} />
        </div>
      </div>
      <NavLink to="/character-creation-L5R/Family">
        <button>Choose your Family</button>
      </NavLink>
    </div>
  );
}

export default CharacterCreationL5R;
